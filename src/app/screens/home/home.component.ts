import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Subscription } from "rxjs";

import { NotificationMessage } from "../../models/notification-message";
import { FirebaseNotificationService } from "../../services/firebase-notification.service";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  firebaseToken = "Token aun no asignado";
  messages: NotificationMessage[] = [];
  isInitializing = false;

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly firebaseNotificationService: FirebaseNotificationService,
    private readonly routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.firebaseNotificationService.token$.subscribe((token) => {
        this.firebaseToken = token;
      })
    );

    this.subscriptions.add(
      this.firebaseNotificationService.messages$.subscribe((messages) => {
        this.messages = messages;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  async connectFirebase(): Promise<void> {
    this.isInitializing = true;

    try {
      await this.firebaseNotificationService.initialize();
    } finally {
      this.isInitializing = false;
    }
  }

  goToShare(): void {
    this.routerExtensions.navigate(["/share"]);
  }

  goToCamera(): void {
    this.routerExtensions.navigate(["/camera"]);
  }

  goToMap(): void {
    this.routerExtensions.navigate(["/map"]);
  }
}
