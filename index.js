const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let dashboardWindow;

function createLoginWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, 'images', 'images.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'frontend', 'index.html'));
}

ipcMain.on('login-success', () => {
  if (mainWindow) mainWindow.close();

  dashboardWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'images', './images/images.ico'),
  });

  dashboardWindow.loadFile(path.join(__dirname, './frontend/dashboard.html'));
});

app.whenReady().then(createLoginWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
