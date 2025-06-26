const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let dashboardWindow;

function createLoginWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, 'images', 'Qik 280x280.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'frontend', 'login.html'));
}

ipcMain.on('login-success', () => {
  if (mainWindow) mainWindow.close();

  dashboardWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'images', 'QIKBanco-logo.ico'),
  });

  dashboardWindow.loadFile(path.join(__dirname, './frontend/dashboard.html'));

  dashboardWindow.on('closed', () => {
    dashboardWindow = null;
  });
});

app.whenReady().then(createLoginWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
