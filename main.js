// model.js
export default class HoroscopeModel {
  constructor() {
    this.signs = [
      { name: "Aries", start: "21-03", end: "19-04", emoji: "♈" },
      { name: "Tauro", start: "20-04", end: "20-05", emoji: "♉" },
      { name: "Géminis", start: "21-05", end: "20-06", emoji: "♊" },
      { name: "Cáncer", start: "21-06", end: "22-07", emoji: "♋" },
      { name: "Leo", start: "23-07", end: "22-08", emoji: "♌" },
      { name: "Virgo", start: "23-08", end: "22-09", emoji: "♍" },
      { name: "Libra", start: "23-09", end: "22-10", emoji: "♎" },
      { name: "Escorpio", start: "23-10", end: "21-11", emoji: "♏" },
      { name: "Sagitario", start: "22-11", end: "21-12", emoji: "♐" },
      { name: "Capricornio", start: "22-12", end: "19-01", emoji: "♑" },
      { name: "Acuario", start: "20-01", end: "18-02", emoji: "♒" },
      { name: "Piscis", start: "19-02", end: "20-03", emoji: "♓" },
    ];
  }

  getSign(day, month) {
    const date = new Date(2000, month - 1, day); // Año arbitrario para comparación
    for (let sign of this.signs) {
      const [startDay, startMonth] = sign.start.split("-").map(Number);
      const [endDay, endMonth] = sign.end.split("-").map(Number);
      const startDate = new Date(2000, startMonth - 1, startDay);
      const endDate = new Date(2000, endMonth - 1, endDay);

      if (
        (startDate <= date && date <= endDate) ||
        (startMonth > endMonth &&
          (date >= startDate || date <= endDate))
      ) {
        return sign;
      }
    }
    return null;
  }

  getHoroscope(signName) {
    // Aquí puedes implementar la lógica para obtener el horóscopo real
    // Por simplicidad, se devuelve un mensaje genérico
    return `Hoy es un buen día para los nacidos bajo el signo de ${signName}.`;
  }
}
