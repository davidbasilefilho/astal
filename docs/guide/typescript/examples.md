# TypeScript Examples

## Gtk3

### [Simple Bar](https://github.com/Aylur/astal/tree/main/examples/gtk3/js/simple-bar)
![simple-bar](https://github.com/user-attachments/assets/a306c864-56b7-44c4-8820-81f424f32b9b)

### [Notification Popups](https://github.com/Aylur/astal/tree/main/examples/gtk3/js/notifications)
![notification-popups](https://github.com/user-attachments/assets/0df0eddc-5c74-4af0-a694-48dc8ec6bb44)
### [Applauncher](https://github.com/Aylur/astal/tree/main/examples/gtk3/js/applauncher)
![launcher](https://github.com/user-attachments/assets/2695e3bb-dff4-478a-b392-279fe638bfd3)

### [Media Player](https://github.com/Aylur/astal/tree/main/examples/gtk3/js/media-player)
![media-player](https://github.com/user-attachments/assets/891e9706-74db-4505-bd83-c3628d7b4fd0)

### [OSD](https://github.com/Aylur/astal/tree/main/examples/gtk3/js/osd)
![osd](https://github.com/user-attachments/assets/08e0e118-6b07-4cac-8ebc-08262594cee7)

## Integrated Examples

To run the integrated examples, follow these steps:

1. Ensure you have the necessary dependencies installed.
2. Create a new entry point file `examples/gtk3/js/integrated-app.ts` with the following content:

```typescript
import { App } from "astal/gtk3";
import Applauncher from "./applauncher/app";
import MediaPlayer from "./media-player/widget/MediaPlayer";
import NotificationPopups from "./notifications/notifications/NotificationPopups";

// Initialize Applauncher
function initializeApplauncher() {
    Applauncher();
}

// Initialize MediaPlayer
function initializeMediaPlayer() {
    MediaPlayer();
}

// Initialize NotificationPopups
function initializeNotificationPopups() {
    NotificationPopups();
}

// Start the integrated app
App.start({
    instanceName: "integrated-app",
    main() {
        initializeApplauncher();
        initializeMediaPlayer();
        initializeNotificationPopups();
    },
});
```

3. Run the integrated examples using the new entry point file.
