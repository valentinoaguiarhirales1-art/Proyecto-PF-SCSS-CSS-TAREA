/**
 * JavaScript de Interacción y Validación para Portafolio de Desarrollador
 * - Validación en tiempo real y al envío del formulario de contacto
 * - Manejo de estados de error e íconos visuales según sistema de diseño
 * - Desplazamiento suave (smooth scroll) accesible para enlaces de navegación
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // Manejo del Formulario de Contacto
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    // Regex estándar para validación estricta de correo electrónico
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    /**
     * Muestra el estado de error en un campo
     * @param {HTMLElement} inputElement 
     * @param {string} customMessage 
     */
    function showError(inputElement, customMessage) {
      const formGroup = inputElement.closest('.form-group');
      if (!formGroup) return;

      formGroup.classList.add('has-error');
      const errorMessage = formGroup.querySelector('.form-group__error-message');
      if (errorMessage && customMessage) {
        errorMessage.textContent = customMessage;
      }
      inputElement.setAttribute('aria-invalid', 'true');
    }

    /**
     * Limpia el estado de error en un campo
     * @param {HTMLElement} inputElement 
     */
    function clearError(inputElement) {
      const formGroup = inputElement.closest('.form-group');
      if (!formGroup) return;

      formGroup.classList.remove('has-error');
      inputElement.removeAttribute('aria-invalid');
    }

    /**
     * Valida un campo individual
     * @param {HTMLElement} inputElement 
     * @returns {boolean} Es válido
     */
    function validateField(inputElement) {
      const value = inputElement.value.trim();

      if (inputElement === nameInput) {
        if (!value) {
          showError(inputElement, "Can't be empty");
          return false;
        }
      } else if (inputElement === emailInput) {
        if (!value) {
          showError(inputElement, "Can't be empty");
          return false;
        } else if (!emailRegex.test(value)) {
          showError(inputElement, "Sorry, invalid format here");
          return false;
        }
      } else if (inputElement === messageInput) {
        if (!value) {
          showError(inputElement, "Can't be empty");
          return false;
        }
      }

      clearError(inputElement);
      return true;
    }

    // Escuchadores de eventos para limpiar errores al escribir
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (!input) return;

      input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (formGroup && formGroup.classList.contains('has-error')) {
          validateField(input);
        }
      });

      input.addEventListener('blur', () => {
        validateField(input);
      });
    });

    // Envío del formulario
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput);
      const isEmailValid = validateField(emailInput);
      const isMessageValid = validateField(messageInput);

      if (isNameValid && isEmailValid && isMessageValid) {
        // Simulación de envío exitoso
        if (successAlert) {
          successAlert.textContent = "Thank you! Your message has been sent successfully. ✅";
          successAlert.classList.add('is-visible');

          contactForm.reset();

          setTimeout(() => {
            successAlert.classList.remove('is-visible');
          }, 6000);
        }
      }
    });
  }

  // ==========================================
  // Enlaces con desplazamiento suave
  // ==========================================
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
