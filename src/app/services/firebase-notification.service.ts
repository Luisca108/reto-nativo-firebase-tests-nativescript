import { Injectable } from "@angular/core";
import { ApplicationSettings } from "@nativescript/core";
import { firebase } from "@nativescript/firebase-core";
import { Toasty } from "@triniwiz/nativescript-toasty";
import { BehaviorSubject } from "rxjs";

import { NotificationMessage } from "../models/notification-message";

const firebaseTokenKey = "firebaseToken";

@Injectable({ providedIn: "root" })
export class FirebaseNotificationService {
  private readonly tokenSubject = new BehaviorSubject<string>(
    ApplicationSettings.getString(firebaseTokenKey, "Token aun no asignado")
  );

  private readonly messagesSubject = new BehaviorSubject<NotificationMessage[]>([]);
  readonly token$ = this.tokenSubject.asObservable();
  readonly messages$ = this.messagesSubject.asObservable();

  async initialize(): Promise<void> {
    const messaging = firebase().messaging();
    messaging.showNotificationsWhenInForeground = true;
    await messaging.requestPermission();
    await messaging.registerDeviceForRemoteMessages();

    const token = await messaging.getToken();
    this.saveToken(token);

    messaging.onToken((newToken) => {
      this.saveToken(newToken);
    });

    messaging.onMessage((message) => {
      const title = message.notification?.title ?? "Notificacion Firebase";
      const body = message.notification?.body ?? JSON.stringify(message.data ?? {});
      this.addMessage({ title, body, receivedAt: new Date().toLocaleString() });
      new Toasty({ text: `${title}: ${body}` }).show();
    });
  }

  private saveToken(token: string): void {
    ApplicationSettings.setString(firebaseTokenKey, token);
    this.tokenSubject.next(token);
  }

  private addMessage(message: NotificationMessage): void {
    this.messagesSubject.next([message, ...this.messagesSubject.value]);
  }
}
