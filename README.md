# 📂 *Proyecto-PF-SCSS-CSS-TAREA* ✨

> **Mini Portafolio de Desarrollador Web Responsive** desarrollado conforme a los requerimientos técnicos y de diseño estipulados para la entrega de la *Cuarta Tarea Entregable de CSS / SASS* para **Conquer Blocks**. ✅📄

---

## 📄 *Descripción General del Proyecto*

Este proyecto consiste en la maquetación y desarrollo completo de un **portafolio profesional de desarrollador de una sola página (Single-Page Developer Portfolio)**, fiel al diseño del documento de especificaciones y *Figma*. El sitio es completamente funcional, responsivo y construido bajo la metodología **Mobile First**, garantizando una experiencia visual impecable en teléfonos móviles, tablets y pantallas de escritorio. ✨

---

## ✅ *Requerimientos Cumplidos al 100%*

* **✅ Boilerplate y Estructura Semántica**: *Estructura HTML5 pura*, semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<picture>`, `<form>`, `<footer>`) que optimiza el SEO y la accesibilidad web.
* **✅ Uso de SASS (SCSS) y CSS**: *Arquitectura modular en SCSS* organizada por componentes, variables del sistema de diseño, mixins para media queries y reset global, compilada a CSS estándar con soporte de mapas de origen (*Source Maps*).
* **✅ Recursos de Diseño de Figma**: *Integración exacta de colores, fuentes, espaciados y elementos decorativos* especificados en el **Design System** (paleta `#151515`, `#4EE1A0`, `#242424`, `#D9D9D9`, tipografía *Space Grotesk* en pesos **Bold** y **Medium**).
* **✅ Iconos y Elementos Gráficos en SVG**: *Implementación de iconos vectoriales SVG* escalables para redes sociales (*GitHub*, *Frontend Mentor*, *LinkedIn*, *Twitter*), iconos de error de validación y patrones abstractos de anillos y círculos.
* **✅ Fidelidad al Diseño**: *Réplica exacta y pixel-perfect* de las vistas estáticas del documento en sus tres resoluciones: **Desktop (1110px+)**, **Tablet (768px)** y **Mobile (375px)**.
* **✅ Interactividad y Estados Hover**: *Transiciones y efectos visuales* en todos los elementos interactuables (botones de llamado a la acción con subrayado en acento verde `#4EE1A0`, enlaces a código, overlays en tarjetas de proyectos con desenfoque/opacidad y validación dinámica de formulario).
* **✅ Responsive Mobile First**: *Maquetación progresiva* utilizando *Media Queries* fluidas (`@media (min-width: 768px)` y `@media (min-width: 1110px)`).

---

## 📂 *Estructura Organizada del Repositorio*

El repositorio se encuentra estrictamente organizado para mantener la raíz limpia con la **carpeta de origen (`src/`)**, la licencia y la documentación independientes:

```text
📂 Proyecto-PF-SCSS-CSS-TAREA/
├── 📂 src/                            # Carpeta de origen con todo el código del proyecto
│   ├── 📄 index.html                  # Estructura semántica principal HTML5
│   ├── 📄 package.json                # Scripts de compilación de SASS y dependencias
│   ├── 📄 .gitignore                  # Exclusiones de Git para dependencias
│   └── 📂 assets/                     # Directorio de recursos estáticos organizados
│       ├── 📂 css/                    # Hojas de estilo CSS compiladas
│       │   ├── 📄 style.css           # CSS listo para producción
│       │   └── 📄 style.css.map       # Mapa de origen para depuración
│       ├── 📂 scss/                   # Código fuente modular en SASS
│       │   ├── 📄 main.scss           # Archivo maestro que enlaza todos los módulos
│       │   ├── 📄 _variables.scss     # Variables: colores, tipografías y breakpoints
│       │   ├── 📄 _mixins.scss        # Mixins responsive y utilidades Mobile-First
│       │   ├── 📄 _reset.scss         # Reseteo de estilos base y box-sizing
│       │   ├── 📄 _typography.scss    # Declaraciones @font-face y jerarquía de texto
│       │   ├── 📄 _components.scss    # Botones interactivos, divisores y patrones SVG
│       │   ├── 📄 _header.scss        # Barra de navegación superior y logotipo
│       │   ├── 📄 _hero.scss          # Sección de presentación y avatar
│       │   ├── 📄 _skills.scss        # Rejilla de habilidades y experiencia
│       │   ├── 📄 _projects.scss      # Cuadrícula de proyectos con overlays hover
│       │   ├── 📄 _contact.scss       # Formulario de contacto con estados de error
│       │   └── 📄 _footer.scss        # Pie de página y enlaces sociales
│       ├── 📂 js/                     # Lógica interactiva del cliente
│       │   └── 📄 main.js             # Validación de formulario en tiempo real y scroll suave
│       ├── 📂 fonts/                  # Tipografías oficiales locales (Space Grotesk)
│       │   ├── 📂 static/
│       │   │   ├── 📄 SpaceGrotesk-Bold.ttf
│       │   │   └── 📄 SpaceGrotesk-Medium.ttf
│       │   └── 📄 SpaceGrotesk-VariableFont_wght.ttf
│       └── 📂 images/                 # Gráficos vectoriales SVG e imágenes WebP
│           ├── 📄 icon-error.svg
│           ├── 📄 icon-frontend-mentor.svg
│           ├── 📄 icon-github.svg
│           ├── 📄 icon-linkedin.svg
│           ├── 📄 icon-twitter.svg
│           ├── 📄 pattern-circle.svg
│           ├── 📄 pattern-rings.svg
│           ├── 📄 image-profile-desktop.webp
│           ├── 📄 image-profile-tablet.webp
│           ├── 📄 image-profile-mobile.webp
│           ├── 📄 thumbnail-project-1-large.webp / small.webp
│           ├── 📄 thumbnail-project-2-large.webp / small.webp
│           ├── 📄 thumbnail-project-3-large.webp / small.webp
│           ├── 📄 thumbnail-project-4-large.webp / small.webp
│           ├── 📄 thumbnail-project-5-large.webp / small.webp
│           └── 📄 thumbnail-project-6-large.webp / small.webp
├── 📄 LICENSE                         # Licencia abierta MIT (independiente)
└── 📄 README.md                       # Documentación técnica completa (independiente)
```

---

## ✨ *Guía de Uso y Compilación*

### 1. *Clonar el repositorio y entrar a la carpeta de origen*
```bash
git clone https://github.com/valentinoaguiarhirales1-art/Proyecto-PF-SCSS-CSS-TAREA.git
cd Proyecto-PF-SCSS-CSS-TAREA/src
```

### 2. *Compilar los archivos SASS (SCSS)*
Para compilar las hojas de estilo de manera manual o en tiempo real durante el desarrollo:

* **Compilación única:**
  ```bash
  npm run build:sass
  ```

* **Modo observador (Watch mode):**
  ```bash
  npm run watch:sass
  ```

### 3. *Visualizar la aplicación*
Basta con abrir el archivo `src/index.html` en cualquier navegador web moderno. No requiere servidores complejos ni configuraciones adicionales.

---

## 📄 *Sistema de Diseño y Paleta de Colores*

* **Fondo Principal**: `#151515` *(Negro profundo)*
* **Superficie / Contacto**: `#242424` *(Gris oscuro)*
* **Acento Interactivo**: `#4EE1A0` *(Verde menta brillante)*
* **Texto Secundario**: `#D9D9D9` *(Gris claro legible)*
* **Texto Principal**: `#FFFFFF` *(Blanco puro)*
* **Estado de Error**: `#FF6F5B` *(Rojo coral de alerta)*

---

## 📄 *Licencia*

Este proyecto se distribuye bajo los términos de la **Licencia MIT**. Consulta el archivo `LICENSE` para mayores detalles. ✅✨
