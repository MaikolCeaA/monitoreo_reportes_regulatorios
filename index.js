const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Cargar app Flask local (levantarla primero en Python)
  win.loadURL('http://localhost:5000');
}

app.whenReady().then(createWindow);
