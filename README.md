# Loren UI

## Descripción

Loren UI es una biblioteca de componentes desarrollada con Expo y React Native.

## Configuración

Este proyecto requiere configuraciones específicas para ejecutar la aplicación localmente y para publicarla en npm.

### Ejecutar la Aplicación

Para ejecutar la aplicación localmente, asegúrate de que el campo `"main"` en tu archivo `package.json` esté configurado de la siguiente manera:

````json
"main": "expo/AppEntry.js",
````
### Crear Build

Para poder subir tu app a npm necesitas generar el build de tu libreria, comnado a utilizar:
````bash
npm run build
````

### Subir a NPM

Para subir tu aplicacion a npm, debes cambiar el campo `"main"` en tu archivo `package.json` a este:

```json
 "main": "dist/index.js",
````

