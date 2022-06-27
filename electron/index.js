const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function main() {
  const window = new BrowserWindow({
    width: 600,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  window.loadFile(path.join(__dirname, "../public/index.html"));
}

app.whenReady().then(main);
