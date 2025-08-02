# 🎁 Sorteo del Amigo Secreto

Una aplicación web simple para organizar un sorteo del **Amigo Secreto**. Ideal para fiestas, reuniones familiares o eventos de oficina.

---

## 📋 Descripción del Proyecto

Este proyecto permite a los usuarios ingresar nombres en una lista, y luego sortea un ganador de forma aleatoria.

Es un desafío de programación básico que ayuda a practicar habilidades fundamentales de JavaScript como:

- Manipulación del DOM
- Manejo de arrays
- Control de flujo y validaciones

---

## ⚙️ Funcionalidades

- ✅ **Añadir nombres**: Campo de texto para ingresar y añadir participantes.
- 📃 **Listar participantes**: Visualiza todos los nombres ingresados.
- 🎲 **Sorteo aleatorio**: Selecciona un nombre al azar como ganador.
- 🚫 **Validación**: Asegura que el campo no esté vacío antes de agregar un nombre.

---

## 💻 Tecnologías Utilizadas

- **HTML** – Para la estructura básica de la aplicación.
- **CSS** – Para estilos visuales simples.
- **JavaScript** – Para la lógica del sorteo, manipulación del DOM y validación de datos.

---

## 🧩 Estructura del Código

El código está organizado en tres funciones principales:

- `agregarAmigo()`: Captura el nombre del usuario, lo valida y lo añade a un array.
- `listaAmigos()`: Recorre el array de nombres y actualiza la lista (`<ul>`) en el HTML.
- `sortearAmigo()`: Elige un nombre aleatoriamente del array, lo muestra como ganador y reinicia la lista.

---

## 🚀 Cómo Usar

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/sindresorhus/del
   ```

2. Abre el archivo index.html en tu navegador.

3. Ingresa los nombres de los participantes en el campo de texto y haz clic en "Agregar".

4. Una vez que estén todos los nombres, haz clic en "Sortear" para conocer al afortunado.
