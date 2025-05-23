// controller.js
import HoroscopeModel from "./model.js";
import HoroscopeView from "./view.js";

class HoroscopeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindDateInput(this.handleDateInput.bind(this));
    this.view.bindConsult(this.handleConsult.bind(this));
  }

  handleDateInput() {
    const dateStr = this.view.getDate();
    const isValid = /^\d{2}-\d{2}-\d{4}$/.test(dateStr);
    this.view.setButtonState(isValid);
  }

  handleConsult() {
    const dateStr = this.view.getDate();
    const [day, month, year] = dateStr.split("-").map(Number);
    const sign = this.model.getSign(day, month);
    if (sign) {
      const horoscope = this.model.getHoroscope(sign.name);
      this.view.showMessage(`${sign.emoji} ${horoscope}`);
      this.view.setButtonState(false);
      setTimeout(() => {
        this.view.hideMessage();
        this.view.setButtonState(true);
      }, 15000);
    } else {
      this.view.showMessage("Fecha inválida.");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const model = new HoroscopeModel();
  const view = new HoroscopeView();
  new HoroscopeController(model, view);
});
