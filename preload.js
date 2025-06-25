const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  validarUsuario: (user, pass) => {
    // Validación simple, puedes mejorarla o consultar a un backend
    return user === 'admin' && pass === '1';
  },
  loginSuccess: () => {
    ipcRenderer.send('login-success');
  }
});