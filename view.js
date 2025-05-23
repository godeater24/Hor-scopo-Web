// view.js
export default class HoroscopeView {
  constructor() {
    this.dateInput = document.getElementById("birthdate");
    this.consultButton = document.getElementById("consult");
    this.messageBox = document.getElementById("message");
  }

  bindDateInput(handler) {
    this.dateInput.addEventListener("input", handler);
  }

  bindConsult(handler) {
    this.consultButton.addEventListener("click", handler);
  }

  getDate() {
    return this.dateInput.value;
  }

  setButtonState(enabled) {
    this.consultButton.disabled = !enabled;
  }

  showMessage(text) {
    this.messageBox.textContent = text;
    this.messageBox.style.opacity = 1;
    this.messageBox.style.transition = "opacity 1s";
    this.messageBox.classList.remove("hidden");
  }

  hideMessage() {
    this.messageBox.style.opacity = 0;
    setTimeout(() => {
      this.messageBox.classList.add("hidden");
    }, 1000);
  }
}
