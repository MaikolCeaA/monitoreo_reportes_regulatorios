# Monitoreo Reportes Regulatorios

Aplicación de escritorio construida con Electron y Flask para monitorear el estado de reportes regulatorios.

## Requisitos

- [Node.js](https://nodejs.org/) (recomendado v16+)
- [Python 3](https://www.python.org/) (recomendado 3.8+)
- [pip](https://pip.pypa.io/en/stable/)

## Instalación

1. **Clona el repositorio**  
   ```sh
   git clone 'https://github.com/MaikolCeaA/monitoreo_reportes_regulatorios.git'
   cd Monitoreo_reportes_regulatorios
   ```

2. **Instala dependencias de Python**  
   ```sh
   cd backend
   pip install flask flask-cors
   cd ..
   ```

3. **Instala dependencias de Node/Electron**  
   ```sh
   npm install
   ```

## Ejecución

1. **Inicia el backend (Flask):**
   ```sh
   cd backend
   python app.py
   ```

2. **En otra terminal, inicia la app de escritorio (Electron):**
   ```sh
   npm start
   ```

## Estructura del proyecto

- `backend/app.py`: Servidor Flask que expone la API y sirve el frontend.
- `frontend/index.html`: Interfaz de usuario.
- `index.js`: Inicializa la ventana de Electron y carga la app Flask.
- `package.json`: Configuración de Node/Electron.

## Uso

La aplicación mostrará una ventana con la lista de reportes y su estado actual, obtenidos desde el backend Flask.
