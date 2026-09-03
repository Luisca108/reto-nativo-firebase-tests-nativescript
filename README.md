# Reto capacidades nativas, Firebase y pruebas

Proyecto NativeScript Angular para demostrar integracion con Firebase Messaging, Toast, social-share, camera, Google Maps y pruebas automaticas con Jasmine/Karma + JUnit Reporter.

## Configurar Firebase

1. Crea un proyecto en Firebase Console.
2. Registra una app Android con este package id:

```text
org.example.retonativotests
```

3. Descarga tu archivo real `google-services.json`.
4. Reemplaza este archivo del proyecto:

```text
App_Resources/Android/src/google-services.json
```

La pantalla principal llama a `firebase().messaging().getToken()` y muestra el token asignado para usarlo desde la consola de Firebase Cloud Messaging.

## Configurar Google Maps

Reemplaza el valor de `google_maps_api_key` por tu API key real:

```xml
<!-- App_Resources/Android/src/main/res/values/strings.xml -->
<string name="google_maps_api_key">TU_GOOGLE_MAPS_API_KEY</string>
```

El mapa esta en `src/app/screens/map` y agrega un marker al cargarse.

## Ejecutar

```bash
npm install
npm run android
```

## Pruebas automaticas

```bash
npm test
```

Karma esta configurado con JUnit Reporter en `karma.conf.js`. Al ejecutar las pruebas, debe generarse:

```text
reports/junit/karma-test-results.xml
```

La suite Jasmine de la app prueba el reducer Redux/NgRx en:

```text
src/app/store/native.reducer.spec.ts
```

La suite ejecutable por Karma/jsdom esta en:

```text
src/app/store/native.reducer.karma.spec.js
```

## Mapa de requisitos

1. Token Firebase visible: `src/app/screens/home` + `src/app/services/firebase-notification.service.ts`.
2. Toast para notificaciones entrantes: `FirebaseNotificationService`, listener `messaging.onMessage`.
3. Social-share texto: `src/app/screens/share/share.component.ts`, metodo `shareTextContent`.
4. Social-share imagen: `src/app/screens/share/share.component.ts`, metodo `shareBundledImage`.
5. Camera para tomar fotografias: `src/app/screens/camera/camera.component.ts`, metodo `takePhoto`.
6. Imagen de camara compartible: `src/app/screens/camera/camera.component.ts`, metodo `sharePhoto`.
7. Google Maps configurado: `@nativescript/google-maps`, `GoogleMapsModule` y `google_maps_api_key`.
8. Marker en el mapa: `src/app/screens/map/map.component.ts`, metodo `onMapReady`.
9. Suite Jasmine para reducer Redux: `src/app/store/native.reducer.spec.ts` y runner Karma en `src/app/store/native.reducer.karma.spec.js`.
10. Karma JUnit Reporter: `karma.conf.js`, salida `reports/junit/karma-test-results.xml`.

## Nota sobre claves

Las claves reales de Firebase y Google Maps deben pertenecer a tu cuenta. El proyecto incluye placeholders para indicar exactamente donde pegarlas sin exponer credenciales sensibles en el repositorio.
