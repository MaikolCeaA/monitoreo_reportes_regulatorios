const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

// Ruta correcta a usuarios.json
const usuariosFilePath = path.join(__dirname, 'data', 'usuarios.json');

let usuarios = {};
try {
  const rawData = fs.readFileSync(usuariosFilePath, 'utf8');
  usuarios = Object.fromEntries(
    Object.entries(JSON.parse(rawData)).map(([k, v]) => [k.toLowerCase(), v])
  );
} catch (error) {
  console.error('Error leyendo usuarios.json:', error);
}

contextBridge.exposeInMainWorld('api', {
  validarUsuario: (user, pass) => {
    return usuarios[user.toLowerCase()] === pass;
  },
  loginSuccess: () => {
    ipcRenderer.send('login-success');
  }
});
