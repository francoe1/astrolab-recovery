# Arturia AstroLab - Firmware Recovery & Upgrade Guide 🎹🛠️

Guía interactiva y técnica de recuperación para **Arturia AstroLab** ante fallos de actualización de firmware (1.7 a 2.0, 2.1 o superior), bloqueo en el logotipo de inicio y controlador faltante «USB download gadget» (Código 28 en Administrador de Dispositivos de Windows).

🌐 **Sitio Web en GitHub Pages**: [https://francoe1.github.io/astrolab-recovery/](https://francoe1.github.io/astrolab-recovery/)

---

## 📋 Resumen del Problema
Al actualizar el firmware de AstroLab desde **Analog Lab V / Pro**:
1. El sintetizador entra en modo de recuperación (**Rockchip Bootloader**).
2. Windows x64 no reconoce el dispositivo automáticamente y lo etiqueta como `USB download gadget` con advertencia amarilla (**Código 28**).
3. Analog Lab se detiene con `Update failed: Please ensure the AstroLab is well connected and try again`.
4. El teclado queda congelado en el logo o en `Installing package 1/1 - 0.0%`.

## ⚡ Solución en 5 Pasos
1. **Entrar en Recovery Mode**: Mantener presionado el encoder de navegación central mientras se enciende el teclado con el interruptor trasero (mantener ~5 segundos hasta ver la pantalla de recuperación).
2. **Instalar el Controlador Rockusb**: Apuntar el Administrador de dispositivos a la carpeta `driver/` que contiene `rockusb.inf`, `rockusb.sys` y `rockusb.cat`.
3. **Restaurar Versión Anterior**: Usar la opción *Update from file* en Analog Lab seleccionando el firmware de respaldo (ej. v1.7.1).
4. **Actualizar a la Versión Deseada**: Una vez operativo el instrumento, actualizar normalmente (ej. v2.0 o superior).
5. **Calibrar**: Realizar calibración de Pitch/Mod wheel, aftertouch y pedales en *Settings ➔ Hardware Calibration*.

## 📂 Contenido del Repositorio
- `index.html`: Aplicación web interactiva y responsiva con soporte bilingüe (Español / Inglés).
- `styles.css`: Sistema de diseño moderno inspirado en la estética industrial de Arturia.
- `app.js`: Lógica interactiva (evaluador de síntomas, checklist con guardado local, selector de idioma, copiado de rutas).
- `driver/`: Controladores oficiales Rockusb x64 (`rockusb.inf`, `rockusb.sys`, `rockusb.cat`, `astrolab-rockusb-driver.zip`).
- `.github/workflows/pages.yml`: Despliegue automatizado continuo en GitHub Pages.

## ⚖️ Descargo de Responsabilidad (Disclaimer)
Este proyecto es una iniciativa comunitaria e independiente y no está patrocinado ni afiliado oficialmente a Arturia.
Arturia y AstroLab son marcas registradas de Arturia.
