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
