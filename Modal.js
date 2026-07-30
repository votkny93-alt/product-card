export class Modal {
  constructor(registrationModal) {
    this.modal = document.getElementById(registrationModal);
    this.closeBtn = this.modal.querySelector('.close-btn');
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    }

    open() {
      this.modal.classList.add('modal-showed');

    }

    close() {
      this.modal.classList.remove('modal-showed');
    }

    isOpen() {
      return this.modal.classList.contains('modal-showed');
    }
  }