/**
 * Arturia AstroLab Recovery Guide - Bilingual Controller (ES / EN)
 * Clean, professional logic inspired by Arturia.com
 */

const translations = {
  es: {
    // Nav & Legal
    badge_unofficial: "NO OFICIAL",
    legal_banner_bold: "Aviso Importante / No Oficial:",
    legal_banner_text: "Esta guía comunitaria <strong>no ha sido probada ni aprobada por Arturia</strong>, ni es un sitio oficial. Para soporte técnico oficial o validar su caso, por favor contacte directamente con",
    legal_banner_link: "Arturia Support ↗",
    nav_diag: "Diagnóstico",
    nav_flow: "Diagrama",
    nav_steps: "Pasos",
    nav_check: "Checklist",
    nav_faq: "FAQ",
    nav_resources: "Recursos",
    nav_disclaimer: "Descargo",
    nav_cta: "Iniciar Guía",

    // Hero
    hero_title: "Recuperación de <span>Arturia AstroLab</span> tras fallo de actualización",
    hero_sub: "Guía interactiva para resolver el bloqueo en el logotipo de inicio, error de «USB download gadget» (Código 28 en Windows) y restauración limpia del firmware.",
    stat_device_label: "Dispositivo",
    stat_device_val: "Arturia AstroLab",
    stat_id_label: "ID de Hardware Crítico",
    stat_cause_label: "Causa Principal",
    stat_cause_val: "Falta Driver Rockusb",
    stat_strategy_label: "Estrategia Comprobada",
    stat_strategy_val: "Restaurar versión previa ➔ luego actualizar",
    hero_btn_start: "Comenzar Asistente",
    hero_btn_diag: "Evaluador de Síntomas",

    // Diagnostics
    diag_tag: "Evaluación Rápida",
    diag_title: "¿Tu AstroLab presenta estos síntomas?",
    diag_desc: "Selecciona las casillas que coincidan con el estado de tu instrumento para confirmar si este método aplica a tu caso.",
    symptom_1_title: "Bloqueo en el Logo de Arturia",
    symptom_1_desc: "Al encender normalmente, la pantalla queda fija en el logotipo y no muestra versión ni completa el arranque.",
    symptom_2_title: "Congelado en 0.0% o etapas 26-39 de 48",
    symptom_2_desc: "Analog Lab avanza la descarga pero el teclado queda detenido en Installing package 1/1 - 0.0%.",
    symptom_3_title: "Error Update failed en Analog Lab",
    symptom_3_desc: "Mensaje: Please ensure the AstroLab is well connected and try again. (Unknown update error).",
    symptom_4_title: "USB download gadget en Windows",
    symptom_4_desc: "En Recovery Mode, el Administrador de Dispositivos muestra advertencia amarilla y Código 28.",
    symptom_5_title: "ID de Hardware Rockchip 2207:330C",
    symptom_5_desc: "El dispositivo no reconocido en modo recuperación posee el identificador USB\\VID_2207&PID_330C.",
    symptom_6_title: "Fallo tanto Online como Update from file",
    symptom_6_desc: "Intentar actualizar con el archivo local descargado reproduce el mismo fallo de comunicación.",
    diag_no_selection: "Marca las casillas superiores para diagnosticar el estado de tu instrumento.",
    diag_partial: "Diagnóstico Parcial: Hay indicios de fallo en la interfaz de flasheo. Recomendamos revisar los pasos.",
    diag_confirmed: "Diagnóstico Confirmado: Tu AstroLab está en modo de recuperación Rockchip y Windows no posee el driver de bajo nivel. Aplica el Paso 2.",
    diag_btn_jump: "Ir al Paso Recomendado",

    // Flowchart
    flow_tag: "Ruta de Solución",
    flow_title: "Diagrama del Proceso de Recuperación",
    flow_desc: "Haz clic en cualquier fase para saltar directamente a sus instrucciones detalladas.",
    flow_1_title: "1. Fallo al Actualizar",
    flow_1_sub: "AstroLab bloqueado en logo",
    flow_2_title: "2. Recovery Mode",
    flow_2_sub: "Código 28 en Windows",
    flow_3_title: "3. Driver Rockusb",
    flow_3_sub: "Instalar driver local",
    flow_4_title: "4. Restaurar FW Previo",
    flow_4_sub: "Update from file (v1.7)",
    flow_5_title: "5. Actualizar Firmware",
    flow_5_sub: "Upgrade definitivo (v2.0+)",
    flow_6_title: "6. Resuelto",
    flow_6_sub: "Sistema 100% operativo",

    // Stepper
    stepper_tag: "Procedimiento de Recuperación",
    stepper_title: "Asistente Paso a Paso",
    stepper_desc: "Sigue minuciosamente cada fase. La clave fundamental es restaurar primero la versión previa estable antes de actualizar a la versión destino.",
    step_label: "Paso",
    step_of: "de",
    step_1_nav: "Acceso a Recovery Mode e Identificación USB",
    step_2_nav: "Instalación del Controlador Rockchip Local",
    step_3_nav: "La Clave: Reinstalar Firmware Previo",
    step_4_nav: "Actualización Definitiva de Firmware",
    step_5_nav: "Verificación y Buenas Prácticas",

    // Step 1
    step_1_phase: "Fase 1: Diagnóstico de Bajo Nivel",
    step_1_h3: "Acceso a Recovery Mode e Identificación del Dispositivo",
    step_1_summary: "Cuando el firmware falla durante la escritura, el sistema operativo principal no arranca, pero el procesador mantiene intacto el bootloader de recuperación por hardware.",
    step_1_info: "Durante el arranque normal, el instrumento no expone la interfaz de flasheo. Solo al ingresar en Recovery Mode conmuta a USB download gadget.",
    step_1_i1_title: "Conectar el AstroLab por USB directo",
    step_1_i1_desc: "Utiliza el cable USB provisto conectado directamente a un puerto USB de la computadora (evita hubs o puertos de teclados).",
    step_1_i2_title: "Ingresar en Recovery Mode",
    step_1_i2_desc: "Enciende el AstroLab manteniendo presionada la combinación de recuperación hasta que la pantalla indique el modo Recovery.",
    step_1_i3_title: "Abrir Administrador de Dispositivos",
    step_1_i3_desc: "Presiona Win + X y selecciona Administrador de dispositivos (o ejecuta devmgmt.msc).",
    step_1_i4_title: "Comprobar el dispositivo no reconocido",
    step_1_i4_desc: "Verás un dispositivo con signo de exclamación amarillo llamado USB download gadget. Haz clic derecho ➔ Propiedades ➔ pestaña Detalles ➔ Id. de hardware. Verifica que contiene:",
    step_1_warn: "Código 28 en Windows: No están instalados los controladores para este dispositivo. Esto confirma que Windows no puede transferir paquetes porque carece del driver USB de bajo nivel.",

    // Step 2
    step_2_phase: "Fase 2: Driver de Comunicación",
    step_2_h3: "Instalación del Controlador Rockchip Local",
    step_2_summary: "El microcontrolador interno utiliza la arquitectura Rockchip para el arranque de recuperación. Debemos proporcionar a Windows el controlador de transferencia rockusb.",
    step_2_alert: "Archivos incluidos en esta carpeta: Utiliza la carpeta local driver/ que contiene rockusb.inf, rockusb.sys y rockusb.cat sin requerir descargas externas.",
    step_2_i1_title: "Localizar la carpeta driver local",
    step_2_i1_desc: "Utiliza la carpeta driver incluida en este directorio, la cual contiene los archivos oficiales del controlador para Windows x64.",
    step_2_i2_title: "Actualizar controlador en Administrador de Dispositivos",
    step_2_i2_desc: "Haz clic derecho sobre USB download gadget (con advertencia amarilla) y selecciona Actualizar controlador.",
    step_2_i3_title: "Seleccionar instalación manual",
    step_2_i3_desc: "Elige la opción «Examinar mi PC en busca de controladores» (Browse my computer for drivers).",
    step_2_i4_title: "Indicar la ruta de la carpeta driver",
    step_2_i4_desc: "Selecciona la carpeta driver donde se ubica rockusb.inf y completa el asistente.",
    step_2_i5_title: "Verificar la desaparición del Código 28",
    step_2_i5_desc: "Windows reconocerá la interfaz como Rockusb Device y el aviso amarillo desaparecerá.",

    // Step 3
    step_3_phase: "Fase 3: El Paso Fundamental",
    step_3_h3: "La Clave: Reinstalar Primero la Versión Previa de Firmware",
    step_3_summary: "No intentes saltar directamente a la versión destino más reciente. La solución comprobada consiste en reinstalar primero la versión previa estable (por ejemplo 1.7) para reconstruir la estructura base de particiones.",
    step_3_alert: "Regla de Oro: Primero devuelve el sintetizador a un estado operativo normal reinstalando el firmware previo antes de volver a intentar la actualización.",
    step_3_i1_title: "Mantener el AstroLab en Recovery Mode",
    step_3_i1_desc: "Asegúrate de que el cable USB continúe conectado y el driver Rockusb esté activo.",
    step_3_i2_title: "Abrir Analog Lab en modo Standalone",
    step_3_i2_desc: "Ejecuta Analog Lab de forma independiente en Windows, nunca como plugin dentro de un DAW.",
    step_3_i3_title: "Acceder a Update from file",
    step_3_i3_desc: "En las opciones del AstroLab en Analog Lab, selecciona la función Update from file (Actualizar desde archivo local).",
    step_3_i4_title: "Seleccionar el firmware previo oficial",
    step_3_i4_desc: "Carga el archivo de firmware previo oficial de Arturia correspondiente al modelo exacto.",
    step_3_i5_title: "Esperar la instalación completa",
    step_3_i5_desc: "Analog Lab transferirá el paquete a través del driver Rockusb. El instrumento avanzará y se reiniciará solo.",
    step_3_i6_title: "Confirmar el arranque normal",
    step_3_i6_desc: "El AstroLab superará el logo inicial y arrancará normalmente mostrando la interfaz en la versión restaurada.",

    // Step 4
    step_4_phase: "Fase 4: Actualización Definitiva",
    step_4_h3: "Actualización a la Versión Destino (2.0 o superior)",
    step_4_summary: "Con el AstroLab en funcionamiento normal y el controlador USB de recuperación ya registrado en Windows, es momento de aplicar la actualización definitiva.",
    step_4_alert: "Ahora el sistema está preparado: Si el instalador conmuta a modo recuperación durante la carga, Windows ya posee el controlador necesario para finalizarla con éxito.",
    step_4_i1_title: "Verificar Analog Lab actualizado",
    step_4_i1_desc: "Comprueba que cuentas con la última versión de Analog Lab desde el Arturia Software Center.",
    step_4_i2_title: "Iniciar la actualización",
    step_4_i2_desc: "Inicia la actualización de firmware desde Analog Lab (online o mediante Update from file).",
    step_4_i3_title: "Supervisar las 48 etapas",
    step_4_i3_desc: "Verás avanzar el contador de 48 etapas sin congelarse en 0.0% gracias al driver en comunicación continua.",
    step_4_i4_title: "Reinicio y finalización",
    step_4_i4_desc: "El AstroLab se reiniciará automáticamente y cargará la nueva versión de firmware.",

    // Step 5
    step_5_phase: "Fase 5: Estado Operativo",
    step_5_h3: "¡AstroLab Recuperado y Actualizado con Éxito!",
    step_5_summary: "Tu instrumento ha sido recuperado y se encuentra en funcionamiento al 100% con todas sus características operativas.",
    step_5_alert: "Resultado Confirmado: El sintetizador arranca sin demoras, muestra la versión actualizada y enlaza perfectamente con Analog Lab.",
    step_5_bp_title: "Buenas prácticas para futuras actualizaciones:",
    step_5_bp1_title: "Conservar el controlador Rockusb instalado",
    step_5_bp1_desc: "Mantenlo en el sistema para cualquier mantenimiento futuro.",
    step_5_bp2_title: "Conexión USB directa y alimentación firme",
    step_5_bp2_desc: "Utiliza siempre los puertos directos de la placa madre y la fuente oficial de alimentación.",
    step_5_bp3_title: "Guardar copias locales de firmware",
    step_5_bp3_desc: "Conserva copias de respaldo de los instaladores de firmware oficiales de Arturia.",

    // Stepper Buttons
    btn_prev: "Paso Anterior",
    btn_next: "Siguiente Paso",
    btn_done: "Proceso Finalizado",

    // Checklist
    check_tag: "Preparación",
    check_title: "Checklist Pre-Recuperación",
    check_desc: "Tus selecciones se guardan automáticamente en tu navegador local para que puedas retomar el proceso en cualquier momento.",
    check_1_title: "Alimentación Eléctrica Segura",
    check_1_desc: "AstroLab conectado con su fuente de poder original a la toma eléctrica.",
    check_2_title: "Conexión USB Directa",
    check_2_desc: "Cable USB directo a la computadora sin hubs ni adaptadores pasivos.",
    check_3_title: "Carpeta driver Local Lista",
    check_3_desc: "Carpeta driver/ con rockusb.inf y rockusb.sys en este mismo directorio.",
    check_4_title: "Firmware Previo Oficial Descargado",
    check_4_desc: "Archivo de firmware previo listo para Update from file.",
    check_5_title: "Analog Lab en Modo Standalone",
    check_5_desc: "Analog Lab ejecutándose de forma independiente fuera de cualquier DAW.",
    check_6_title: "Administrador de Dispositivos Abierto",
    check_6_desc: "devmgmt.msc activo para verificar el reconocimiento de la interfaz.",
    btn_reset_check: "Restablecer Checklist",

    // FAQ
    faq_tag: "Dudas y Soporte",
    faq_title: "Preguntas Frecuentes",
    faq_desc: "Respuestas técnicas sobre los aspectos más importantes del proceso de recuperación.",
    faq_1_q: "¿Por qué el AstroLab se congeló en el logotipo de inicio?",
    faq_1_a: "Durante la actualización de firmware, el sistema reescribe particiones de arranque. Al no contar Windows con el driver adecuado para comunicarse con el procesador en modo flasheo, la escritura quedó incompleta, impidiendo el arranque normal.",
    faq_2_q: "¿Por qué es necesario reinstalar la versión previa antes de la más nueva?",
    faq_2_a: "El paquete de la versión más reciente asume que el sistema base está íntegro. Si existen bloques corruptos por el fallo previo, el instalador puede detenerse nuevamente. La versión previa reconstruye la estructura base original esperada y permite luego una actualización limpia.",
    faq_3_q: "¿Qué significa el Código 28 en Windows?",
    faq_3_a: "El Código 28 indica que el sistema operativo ha detectado la conexión de un componente por hardware (USB download gadget), pero no dispone del archivo de controlador necesario en su biblioteca para iniciar la comunicación.",
    faq_4_q: "¿Esta solución aplica a cualquier versión de AstroLab?",
    faq_4_a: "Sí. Aplica a cualquier actualización fallida (1.7 a 2.0, 2.0 a 2.1 o futuras versiones), ya que la causa raíz es la falta del driver Rockusb en Windows durante el Recovery Mode.",
    faq_5_q: "¿Qué debo hacer si la pantalla permanece en 0.0% durante la instalación?",
    faq_5_a: "No desconectes el cable. Revisa en el Administrador de dispositivos si el controlador Rockusb está activo. Si no está instalado, instala el driver de la carpeta local. Si ya está instalado y no avanza, reinicia en Recovery Mode y prueba la opción Update from file con el firmware previo.",

    // Resources
    res_tag: "Documentación y Descargas",
    res_title: "Recursos y Enlaces Oficiales",
    res_desc: "Acceso a los archivos locales del controlador y a los canales oficiales de soporte de Arturia.",
    res_card1_title: "Carpeta driver Local",
    res_card1_desc: "Controlador rockusb.inf, rockusb.sys y catálogo oficial para Windows x64 ubicado en esta misma carpeta.",
    res_card1_download: "Descargar ZIP",
    res_card2_title: "Soporte Oficial Arturia AstroLab",
    res_card2_desc: "Guía oficial de resolución de problemas y preguntas frecuentes de AstroLab en Arturia Support.",
    res_card2_link: "Arturia Troubleshoot ➔",
    res_card3_title: "Descargas y Firmware Oficial Arturia",
    res_card3_desc: "Portal oficial de descargas de instaladores, manuales y firmwares oficiales de Arturia.",
    res_card3_link: "Descargas Oficiales ➔",

    // Disclaimer
    disclaimer_badge: "COMUNIDAD INDEPENDIENTE • NO OFICIAL",
    disclaimer_title: "Descargo de Responsabilidad y Aviso Legal",
    disclaimer_highlight: "<strong>Declaración de no afiliación y validación:</strong> Este proyecto, sus procedimientos técnicos y los controladores aquí referenciados <strong>NO han sido probados ni aprobados por Arturia</strong>. Este sitio web no es oficial de Arturia ni mantiene relación comercial, patrocinio o respaldo con Arturia SAS. No se utilizan logotipos oficiales de la marca. Si desea soporte oficial o validar su caso, por favor contacte directamente con el servicio técnico de Arturia.",
    disclaimer_p1: "Esta guía interactiva y sus recursos asociados han sido elaborados de manera independiente por usuarios de la comunidad con propósitos exclusivamente educativos, informativos y de soporte técnico entre particulares. Este sitio web no es un canal oficial de Arturia ni de ninguna de sus filiales.",
    disclaimer_p2: "«Arturia», «AstroLab», «Analog Lab» y sus signos distintivos asociados son marcas comerciales o registradas propiedad de Arturia SAS. Su mención en este sitio responde exclusivamente a la necesidad técnica de identificar la compatibilidad del dispositivo bajo las doctrinas de uso legítimo descriptivo (Fair Use). En este sitio web no se utiliza ningún logotipo oficial de Arturia.",
    disclaimer_p3: "Cualquier intervención sobre controladores de bajo nivel, manipulación del modo de recuperación (Recovery Mode) o escritura en memoria flash de firmware es realizada bajo la entera responsabilidad y riesgo del usuario. Ni los creadores ni colaboradores de este sitio asumirán responsabilidad alguna ante fallos de hardware, anulación de garantías oficiales o pérdida de datos.",
    disclaimer_p4: "Si su instrumento se encuentra dentro de su periodo de garantía oficial o requiere asistencia técnica certificada, se recomienda encarecidamente acudir primero a los canales oficiales de Arturia: <a href=\"https://www.arturia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--arturia-blue); font-weight: 600; text-decoration: underline;\">arturia.com/support</a>.",

    // Footer
    footer_disclaimer: "Guía comunitaria independiente no oficial. Este proyecto no ha sido probado ni aprobado por Arturia. Arturia, AstroLab y Analog Lab son marcas registradas de Arturia SAS. Para soporte oficial o validación, acuda a arturia.com/support."
  },

  en: {
    // Nav & Legal
    badge_unofficial: "UNOFFICIAL GUIDE",
    legal_banner_bold: "Important Notice / Unofficial:",
    legal_banner_text: "This community guide <strong>has NOT been tested nor approved by Arturia</strong>, nor is it an official website. For official technical support or to validate your case, please contact",
    legal_banner_link: "Arturia Support ↗",
    nav_diag: "Diagnosis",
    nav_flow: "Flowchart",
    nav_steps: "Steps",
    nav_check: "Checklist",
    nav_faq: "FAQ",
    nav_resources: "Resources",
    nav_disclaimer: "Disclaimer",
    nav_cta: "Start Guide",

    // Hero
    hero_title: "Recover your <span>Arturia AstroLab</span> after update failure",
    hero_sub: "Interactive guide to fix startup logo freeze, «USB download gadget» missing driver (Code 28 in Windows), and clean firmware restoration.",
    stat_device_label: "Device",
    stat_device_val: "Arturia AstroLab",
    stat_id_label: "Critical Hardware ID",
    stat_cause_label: "Root Cause",
    stat_cause_val: "Missing Rockusb Driver",
    stat_strategy_label: "Proven Strategy",
    stat_strategy_val: "Restore previous version ➔ then upgrade",
    hero_btn_start: "Start Recovery Wizard",
    hero_btn_diag: "Symptom Checker",

    // Diagnostics
    diag_tag: "Quick Assessment",
    diag_title: "Does your AstroLab show these symptoms?",
    diag_desc: "Check the symptoms matching your instrument state to confirm if this resolution applies to your case.",
    symptom_1_title: "Stuck on Arturia Logo",
    symptom_1_desc: "During normal power on, the display freezes on the logo without displaying firmware version or booting up.",
    symptom_2_title: "Frozen at 0.0% or stages 26-39 of 48",
    symptom_2_desc: "Analog Lab advances the computer download counter but the AstroLab stays frozen at Installing package 1/1 - 0.0%.",
    symptom_3_title: "Update failed error in Analog Lab",
    symptom_3_desc: "Message: Please ensure the AstroLab is well connected and try again. (Unknown update error).",
    symptom_4_title: "USB download gadget in Windows",
    symptom_4_desc: "In Recovery Mode, Device Manager displays a yellow warning icon and Code 28.",
    symptom_5_title: "Rockchip Hardware ID 2207:330C",
    symptom_5_desc: "The unrecognized recovery USB device has hardware ID USB\\VID_2207&PID_330C.",
    symptom_6_title: "Fails both Online and Update from file",
    symptom_6_desc: "Attempting to update with a downloaded local firmware file reproduces the same communication stall.",
    diag_no_selection: "Check the boxes above to evaluate your instrument status.",
    diag_partial: "Partial Diagnosis: Symptoms suggest low-level flashing interface failure. Review the guide steps.",
    diag_confirmed: "Diagnosis Confirmed: Your AstroLab is in Rockchip recovery mode and Windows lacks the low-level driver. Follow Step 2.",
    diag_btn_jump: "Go to Recommended Step",

    // Flowchart
    flow_tag: "Resolution Path",
    flow_title: "Recovery Process Flowchart",
    flow_desc: "Click on any phase to jump directly to its detailed step-by-step instructions.",
    flow_1_title: "1. Update Failure",
    flow_1_sub: "AstroLab stuck at logo",
    flow_2_title: "2. Recovery Mode",
    flow_2_sub: "Code 28 in Windows",
    flow_3_title: "3. Rockusb Driver",
    flow_3_sub: "Install local driver",
    flow_4_title: "4. Restore Previous FW",
    flow_4_sub: "Update from file (v1.7)",
    flow_5_title: "5. Final Upgrade",
    flow_5_sub: "Upgrade to target (v2.0+)",
    flow_6_title: "6. Resolved",
    flow_6_sub: "100% operational system",

    // Stepper
    stepper_tag: "Recovery Procedure",
    stepper_title: "Step-by-Step Recovery Wizard",
    stepper_desc: "Carefully follow each phase. The fundamental key is restoring the previous stable firmware version before upgrading to the target version.",
    step_label: "Step",
    step_of: "of",
    step_1_nav: "Recovery Mode Access & USB Identification",
    step_2_nav: "Local Rockchip Driver Installation",
    step_3_nav: "The Key: Reinstall Previous Firmware",
    step_4_nav: "Definitive Firmware Upgrade",
    step_5_nav: "Verification & Best Practices",

    // Step 1
    step_1_phase: "Phase 1: Low-Level Diagnosis",
    step_1_h3: "Recovery Mode Access & Device Identification",
    step_1_summary: "When firmware writing fails midway, the main OS cannot boot, but the hardware recovery bootloader remains fully functional inside the processor.",
    step_1_info: "During normal boot, the instrument does not expose the flashing interface. It only switches to USB download gadget in Recovery Mode.",
    step_1_i1_title: "Connect AstroLab via Direct USB",
    step_1_i1_desc: "Use the provided USB cable connected directly to a computer USB port (avoid USB hubs or keyboard pass-through ports).",
    step_1_i2_title: "Enter Recovery Mode",
    step_1_i2_desc: "Power on the AstroLab while holding the recovery button combination until the screen displays Recovery mode.",
    step_1_i3_title: "Open Windows Device Manager",
    step_1_i3_desc: "Press Win + X and select Device Manager (or run devmgmt.msc).",
    step_1_i4_title: "Check the Unrecognized Device",
    step_1_i4_desc: "Locate the yellow exclamation mark device named USB download gadget. Right-click ➔ Properties ➔ Details tab ➔ Hardware Ids. Verify it contains:",
    step_1_warn: "Windows Code 28: Drivers for this device are not installed. This confirms Windows cannot send firmware packets because it lacks the low-level USB communication driver.",

    // Step 2
    step_2_phase: "Phase 2: Communication Driver",
    step_2_h3: "Local Rockchip Driver Installation",
    step_2_summary: "The internal microcontroller uses Rockchip architecture for recovery boot. We must supply Windows with the rockusb transfer driver.",
    step_2_alert: "Files available in this directory: Use the local driver/ folder containing rockusb.inf, rockusb.sys, and rockusb.cat without requiring third-party downloads.",
    step_2_i1_title: "Locate the local driver folder",
    step_2_i1_desc: "Use the driver/ folder included in this directory, which contains the official driver files for Windows x64.",
    step_2_i2_title: "Update Driver in Device Manager",
    step_2_i2_desc: "Right-click on USB download gadget (with yellow warning) and choose Update driver.",
    step_2_i3_title: "Select manual installation",
    step_2_i3_desc: "Choose «Browse my computer for drivers».",
    step_2_i4_title: "Specify the driver folder path",
    step_2_i4_desc: "Select the driver folder where rockusb.inf is located and complete the installation wizard.",
    step_2_i5_title: "Confirm Code 28 disappears",
    step_2_i5_desc: "Windows will recognize the device as Rockusb Device and the yellow warning will disappear.",

    // Step 3
    step_3_phase: "Phase 3: The Fundamental Step",
    step_3_h3: "The Key: Reinstall the Previous Stable Firmware First",
    step_3_summary: "Do not attempt to leap straight to the latest target version. The proven solution requires reinstalling the previous stable firmware first (e.g., 1.7) to rebuild the baseline partition layout.",
    step_3_alert: "Golden Rule: Always restore the synthesizer to an operational state by reinstalling previous firmware before re-attempting the update.",
    step_3_i1_title: "Keep AstroLab in Recovery Mode",
    step_3_i1_desc: "Ensure the USB cable remains connected and the Rockusb driver is active.",
    step_3_i2_title: "Open Analog Lab in Standalone Mode",
    step_3_i2_desc: "Run Analog Lab independently in Windows, never as a VST/AU plugin inside a DAW.",
    step_3_i3_title: "Access Update from file",
    step_3_i3_desc: "In AstroLab settings within Analog Lab, select the Update from file function.",
    step_3_i4_title: "Select Official Previous Firmware",
    step_3_i4_desc: "Choose the official Arturia previous firmware file corresponding to your exact model.",
    step_3_i5_title: "Wait for Complete Installation",
    step_3_i5_desc: "Analog Lab will stream firmware packets through the Rockusb driver. The AstroLab will advance and reboot itself.",
    step_3_i6_title: "Confirm Normal Startup",
    step_3_i6_desc: "The AstroLab will pass the startup logo and boot up normally displaying the restored firmware version.",

    // Step 4
    step_4_phase: "Phase 4: Final Upgrade",
    step_4_h3: "Definitive Upgrade to Target Version (2.0 or newer)",
    step_4_summary: "With the AstroLab booting normally and the USB recovery driver already registered in Windows, it is now safe to perform the final upgrade.",
    step_4_alert: "The system is now fully prepared: If the installer switches to recovery mode during flashing, Windows now has the driver required to complete it smoothly.",
    step_4_i1_title: "Verify Analog Lab is Updated",
    step_4_i1_desc: "Ensure you have the latest version of Analog Lab installed from the Arturia Software Center.",
    step_4_i2_title: "Initiate the Firmware Upgrade",
    step_4_i2_desc: "Start the firmware upgrade from Analog Lab (online or via Update from file).",
    step_4_i3_title: "Monitor the 48 Stages",
    step_4_i3_desc: "You will see the 48-stage counter progress smoothly without freezing at 0.0% thanks to continuous driver communication.",
    step_4_i4_title: "Reboot and Completion",
    step_4_i4_desc: "The AstroLab will automatically restart and load the new firmware version.",

    // Step 5
    step_5_phase: "Phase 5: Operational State",
    step_5_h3: "AstroLab Successfully Recovered & Updated!",
    step_5_summary: "Your instrument has been restored and is 100% operational with all features working properly.",
    step_5_alert: "Confirmed Result: Synthesizer boots promptly, displays the updated version number, and links seamlessly with Analog Lab.",
    step_5_bp_title: "Best practices for future updates:",
    step_5_bp1_title: "Keep the Rockusb driver installed",
    step_5_bp1_desc: "Retain the driver in your Windows system for any future maintenance.",
    step_5_bp2_title: "Direct USB cable & dedicated power",
    step_5_bp2_desc: "Always connect directly to motherboard USB ports using the official wall power supply.",
    step_5_bp3_title: "Save local firmware backup copies",
    step_5_bp3_desc: "Store local backup copies of official Arturia firmware packages on your drive.",

    // Stepper Buttons
    btn_prev: "Previous Step",
    btn_next: "Next Step",
    btn_done: "Process Completed",

    // Checklist
    check_tag: "Preparation",
    check_title: "Pre-Recovery Checklist",
    check_desc: "Your selections are automatically saved in your local browser so you can resume at any moment.",
    check_1_title: "Secure Power Supply",
    check_1_desc: "AstroLab connected with its original wall power adapter (not USB-bus powered).",
    check_2_title: "Direct USB Cable",
    check_2_desc: "Direct USB cable to the PC with no intermediary hubs or loose adapters.",
    check_3_title: "Local Driver Folder Ready",
    check_3_desc: "Local driver/ folder with rockusb.inf and rockusb.sys in this same directory.",
    check_4_title: "Official Previous Firmware Downloaded",
    check_4_desc: "Previous firmware file ready for Update from file.",
    check_5_title: "Analog Lab in Standalone Mode",
    check_5_desc: "Analog Lab running as a standalone app outside of any DAW.",
    check_6_title: "Device Manager Open",
    check_6_desc: "devmgmt.msc open to monitor hardware interface recognition in real-time.",
    btn_reset_check: "Reset Checklist",

    // FAQ
    faq_tag: "Help & Troubleshooting",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Technical explanations addressing key questions regarding the recovery procedure.",
    faq_1_q: "Why did the AstroLab freeze on the startup logo?",
    faq_1_a: "During firmware upgrade, the system flashes boot partitions. When Windows lacked the driver to communicate with the processor in flashing mode, the process stalled midway, leaving incomplete partitions that prevented regular booting.",
    faq_2_q: "Why is it mandatory to reinstall the previous version before the latest one?",
    faq_2_a: "The latest firmware package expects an intact base partition structure. If flash blocks were left corrupted by the previous failure, the newer installer can stall again. The previous version restores the expected baseline layout, paving the way for a clean upgrade.",
    faq_3_q: "What does Code 28 mean in Windows?",
    faq_3_a: "Code 28 signifies that the operating system detected hardware connection (USB download gadget), but does not possess the required driver file in its repository to establish communication.",
    faq_4_q: "Does this solution apply to any AstroLab firmware version?",
    faq_4_a: "Yes. It applies to any failed firmware upgrade (1.7 to 2.0, 2.0 to 2.1, or future versions), because the root cause is the missing Rockusb driver in Windows during Recovery Mode.",
    faq_5_q: "What should I do if the screen stays at 0.0% during installation?",
    faq_5_a: "Do not pull the cable. Check Device Manager to see if the Rockusb driver is active. If missing, install the local driver. If already installed and stalled, restart in Recovery Mode and use Update from file with the previous firmware.",

    // Resources
    res_tag: "Documentation & Links",
    res_title: "Resources & Official Links",
    res_desc: "Access local driver files and official Arturia support channels.",
    res_card1_title: "Local driver Folder",
    res_card1_desc: "Official rockusb.inf, rockusb.sys, and security catalog for Windows x64 located directly in this folder.",
    res_card1_download: "Download ZIP",
    res_card2_title: "Official Arturia AstroLab Support",
    res_card2_desc: "Official troubleshooting guides and AstroLab FAQs on Arturia Support portal.",
    res_card2_link: "Arturia Troubleshoot ➔",
    res_card3_title: "Arturia Official Downloads & Firmware",
    res_card3_desc: "Official download hub for software installers, manuals, and AstroLab firmware files.",
    res_card3_link: "Official Downloads ➔",

    // Disclaimer
    disclaimer_badge: "INDEPENDENT COMMUNITY • UNOFFICIAL",
    disclaimer_title: "Legal Disclaimer & Notice",
    disclaimer_highlight: "<strong>Non-Affiliation & Validation Statement:</strong> This project, its technical procedures, and the referenced driver files <strong>have NOT been tested nor approved by Arturia</strong>. This website is not an official Arturia portal and holds no commercial affiliation, sponsorship, or endorsement from Arturia SAS. No official Arturia logos are used. For official support or to validate your case, please contact Arturia Support directly.",
    disclaimer_p1: "This interactive guide and its associated assets have been independently compiled by community users strictly for educational, informational, and community technical support purposes. This website is not an official channel of Arturia or any of its subsidiaries.",
    disclaimer_p2: "«Arturia», «AstroLab», «Analog Lab», and associated distinctive marks are trademarks or registered trademarks owned by Arturia SAS. Their reference here is strictly nominative to identify device hardware compatibility (Fair Use). No official Arturia logos are used on this site.",
    disclaimer_p3: "Any modification of low-level device drivers, recovery modes, or firmware flashing is undertaken at the user's sole risk and discretion. The creators and contributors of this guide accept no liability for any hardware malfunctions, official warranty voidance, or data loss.",
    disclaimer_p4: "If your instrument is within its official warranty period or if you require certified manufacturer support, you are strongly advised to contact official Arturia Support first: <a href=\"https://www.arturia.com/support\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--arturia-blue); font-weight: 600; text-decoration: underline;\">arturia.com/support</a>.",

    // Footer
    footer_disclaimer: "Independent unofficial community guide. This project has not been tested nor approved by Arturia. Arturia, AstroLab, and Analog Lab are registered trademarks of Arturia SAS. For official support or validation, visit arturia.com/support."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Current language state
  let currentLang = localStorage.getItem('astrolab_lang') || 'es';

  // Stepper State
  let currentStep = 1;
  const totalSteps = 5;

  const stepPanes = document.querySelectorAll('.step-panel');
  const stepNavItems = document.querySelectorAll('.step-btn');
  const progressFill = document.getElementById('progressFill');
  const progressPercent = document.getElementById('progressPercent');
  const progressStepLabel = document.getElementById('progressStepLabel');
  const btnPrev = document.getElementById('btnPrevStep');
  const btnNext = document.getElementById('btnNextStep');
  const toast = document.getElementById('toastNotice');
  const langEsBtn = document.getElementById('langEs');
  const langEnBtn = document.getElementById('langEn');

  // Apply Language
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('astrolab_lang', lang);

    if (langEsBtn && langEnBtn) {
      if (lang === 'es') {
        langEsBtn.classList.add('active');
        langEnBtn.classList.remove('active');
      } else {
        langEnBtn.classList.add('active');
        langEsBtn.classList.remove('active');
      }
    }

    const dict = translations[lang] || translations['es'];

    // Update text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update html elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Refresh stepper and diagnostic text
    updateStepper(currentStep);
    updateDiagnostic();
  }

  if (langEsBtn) {
    langEsBtn.addEventListener('click', () => setLanguage('es'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }

  // Update Stepper UI
  function updateStepper(step) {
    if (step < 1) step = 1;
    if (step > totalSteps) step = totalSteps;
    currentStep = step;

    const dict = translations[currentLang] || translations['es'];

    // Panes
    stepPanes.forEach(pane => {
      pane.classList.remove('active');
      if (parseInt(pane.getAttribute('data-step')) === step) {
        pane.classList.add('active');
      }
    });

    // Sidebar Nav
    stepNavItems.forEach(item => {
      const itemStep = parseInt(item.getAttribute('data-step'));
      item.classList.remove('active');
      if (itemStep === step) {
        item.classList.add('active');
      }
      if (itemStep < step) {
        item.classList.add('completed');
      } else {
        item.classList.remove('completed');
      }
    });

    // Progress Bar
    const percent = Math.round((step / totalSteps) * 100);
    if (progressFill) progressFill.style.width = percent + '%';
    if (progressPercent) progressPercent.textContent = percent + '%';
    if (progressStepLabel) progressStepLabel.textContent = dict.step_label + ' ' + step + ' ' + dict.step_of + ' ' + totalSteps;

    // Prev/Next buttons
    if (btnPrev) {
      btnPrev.disabled = step === 1;
      btnPrev.style.opacity = step === 1 ? '0.35' : '1';
      btnPrev.style.pointerEvents = step === 1 ? 'none' : 'auto';
      btnPrev.querySelector('span').textContent = dict.btn_prev;
    }

    if (btnNext) {
      const nextSpan = btnNext.querySelector('span');
      if (step === totalSteps) {
        if (nextSpan) nextSpan.textContent = dict.btn_done;
        btnNext.classList.remove('btn-primary');
        btnNext.classList.add('btn-secondary');
      } else {
        if (nextSpan) nextSpan.textContent = dict.btn_next;
        btnNext.classList.remove('btn-secondary');
        btnNext.classList.add('btn-primary');
      }
    }
  }

  // Stepper Nav clicks
  stepNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetStep = parseInt(item.getAttribute('data-step'));
      updateStepper(targetStep);
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      updateStepper(currentStep - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        updateStepper(currentStep + 1);
      } else {
        const dict = translations[currentLang] || translations['es'];
        showToast(dict.btn_done);
      }
    });
  }

  // Flowchart node navigation
  const flowNodes = document.querySelectorAll('.flow-step[data-target-step]');
  flowNodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetStep = parseInt(node.getAttribute('data-target-step'));
      updateStepper(targetStep);
      const stepperEl = document.getElementById('recuperacion-pasos');
      if (stepperEl) {
        stepperEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Diagnostic Checklist
  const symptomCards = document.querySelectorAll('.symptom-card');
  const diagCountBadge = document.getElementById('diagCountBadge');
  const diagStatusText = document.getElementById('diagStatusText');

  function updateDiagnostic() {
    let checkedCount = 0;
    symptomCards.forEach(item => {
      if (item.classList.contains('checked')) checkedCount++;
    });

    const dict = translations[currentLang] || translations['es'];

    if (diagCountBadge) {
      diagCountBadge.textContent = checkedCount + ' / ' + symptomCards.length + ' (' + dict.diag_tag + ')';
    }

    if (diagStatusText) {
      if (checkedCount >= 2) {
        diagStatusText.textContent = dict.diag_confirmed;
      } else if (checkedCount === 1) {
        diagStatusText.textContent = dict.diag_partial;
      } else {
        diagStatusText.textContent = dict.diag_no_selection;
      }
    }
  }

  symptomCards.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      updateDiagnostic();
    });
  });

  // Pre-Flight Checklist with LocalStorage
  const checkItems = document.querySelectorAll('.check-item');
  const resetChecklistBtn = document.getElementById('resetChecklistBtn');

  // Load saved checklist
  const savedChecks = JSON.parse(localStorage.getItem('astrolab_checklist') || '{}');
  checkItems.forEach((card, index) => {
    if (savedChecks[index]) {
      card.classList.add('checked');
    }

    card.addEventListener('click', () => {
      card.classList.toggle('checked');
      saveChecklist();
    });
  });

  function saveChecklist() {
    const checks = {};
    checkItems.forEach((card, index) => {
      checks[index] = card.classList.contains('checked');
    });
    localStorage.setItem('astrolab_checklist', JSON.stringify(checks));
  }

  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      checkItems.forEach(card => card.classList.remove('checked'));
      localStorage.removeItem('astrolab_checklist');
      showToast(currentLang === 'es' ? 'Lista restablecida' : 'Checklist reset');
    });
  }

  // Copy to Clipboard Utility
  const copyButtons = document.querySelectorAll('.btn-copy, [data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy') || btn.innerText;
      navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        showToast(currentLang === 'es' ? ('Copiado: ' + textToCopy.trim()) : ('Copied: ' + textToCopy.trim()));
      }).catch(() => {
        showToast('Error al copiar');
      });
    });
  });

  // Toast Function
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    const toastMsg = document.getElementById('toastNoticeMsg');
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // FAQ Accordion
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(item => {
    const questionBtn = item.querySelector('.faq-trigger');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqCards.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Initialize Language
  setLanguage(currentLang);
});
