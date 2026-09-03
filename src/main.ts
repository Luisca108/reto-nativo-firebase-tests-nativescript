import "zone.js";
import "@nativescript/firebase-core";
import "@nativescript/firebase-messaging";
import "./app.css";

import { platformNativeScriptDynamic } from "@nativescript/angular";

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
