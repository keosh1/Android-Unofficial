let debugMode = true;

export function logDebug(...data) {
    if (debugMode) {
        console.log(...data);
    }
}

export function setDebugMode(mode) {
    debugMode = mode;
}

export function logEvent(event, callback) {
    console.log("Event:", event);
    // The Simple Analytics Vue plugin handles the production check and domain validation automatically
    if (window.sa_event) {
        window.sa_event(event, callback);
    } else if (callback !== undefined) {
        callback();
    }
}
