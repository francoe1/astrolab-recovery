# AstroLab - Firmware Recovery & Upgrade Guide (Guía Comunitaria No Oficial) 🎹🛠️

> [!WARNING]
> **Aviso Legal / Important Notice**:
> Este proyecto es una iniciativa comunitaria e independiente y **NO ha sido probado ni aprobado por Arturia**, ni constituye un recurso o software oficial. En este proyecto no se utilizan logotipos oficiales de Arturia.
> Si desea soporte técnico homologado o requiere validar su caso con el fabricante, por favor contacte directamente con [Arturia Support](https://www.arturia.com/support).

Guía técnica interactiva elaborada por usuarios de la comunidad para **AstroLab** ante fallos de actualización de firmware (1.7 a 2.0, 2.1 o superior), bloqueo en la pantalla de arranque y controlador faltante «USB download gadget» (Código 28 en Administrador de Dispositivos de Windows).

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
- `styles.css`: Sistema de diseño moderno y responsivo para soporte técnico comunitario.
- `app.js`: Lógica interactiva (asistente de recuperación, evaluador de síntomas, checklist con persistencia local, selector de idioma ES/EN).
- `driver/`: Archivos del controlador Rockchip Rockusb para Windows x64 (`rockusb.inf`, `rockusb.sys`, `rockusb.cat`, `astrolab-rockusb-driver.zip`).
- `favicon.svg`: Icono vectorial comunitario de AstroLab (dial y forma de onda).
- `.github/workflows/pages.yml`: Despliegue automatizado continuo en GitHub Pages.

## ⚖️ Descargo de Responsabilidad (Legal Disclaimer)
- **No Aprobado por Arturia**: Este proyecto, sus procedimientos y los controladores aquí referenciados **NO han sido probados ni aprobados por Arturia**.
- **Independencia**: Este proyecto es una iniciativa comunitaria e independiente y no está patrocinado, avalado ni afiliado oficialmente a Arturia SAS ni a ninguna de sus subsidiarias.
- **Marcas Registradas**: «Arturia», «AstroLab» y «Analog Lab» son marcas comerciales o marcas registradas propiedad de Arturia SAS. Su mención responde únicamente a la necesidad técnica de identificar la compatibilidad del dispositivo bajo el principio de uso legítimo nominativo (Fair Use). Este sitio no utiliza ningún logotipo oficial de Arturia.
- **Responsabilidad**: La manipulación de firmware y controladores de bajo nivel es responsabilidad exclusiva del usuario. Para asistencia técnica garantizada, acuda a los canales oficiales en [arturia.com/support](https://www.arturia.com/support).
