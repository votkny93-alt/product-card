export class Modal {
  #shouldCloseOnOverlay;
  #handleOverlayClick;

  constructor(modalId, buttonId, shouldCloseOnOverlay = false) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#handleOverlayClick = () => this.close();
    this.#initOpen(buttonId);
    this.#initClose();
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open());
    }
  }

  #initClose() {
    if (!this.modal) return;
    const closeButton = this.modal.querySelector('#modal-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.#shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#handleOverlayClick);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    if (this.#shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.#handleOverlayClick);
    }
  }
}