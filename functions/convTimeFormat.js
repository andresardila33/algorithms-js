export const convTimeFormat = (hour) => {
  //Declarar constantes
  const am = "a.m.";
  const pm = "p.m.";
  //Declarar variables
  let message;
  let hoursDay = [];
  //Datos de entrada
  for (let i = 0; i < 24; i++) {
    hoursDay[i] = i + 1;
  }
  //Proceso
  for (let i = 0; i < hoursDay.length; i++) {
    if ((hour > 0 && hour <= 11) || hour === 24) {
      if (hoursDay[i] === hour) {
        hour = hour === 24 ? 12 : hour;
        message = `La hora en formato de a.m., p.m., es: ${hour} ${am}`;
        return message;
      }
    }
    if (hour >= 12 && hour < 24) {
      let equivHours = {
        13: 1,
        14: 2,
        15: 3,
        16: 4,
        17: 5,
        18: 6,
        19: 7,
        20: 8,
        21: 9,
        22: 10,
        23: 11,
      };

      for (const key in equivHours) {
        if (hour === Number(key)) {
          hour = equivHours[key];
          break;
        }
      }
      message = `La hora en formato de a.m., p.m., es: ${hour} ${pm}`;
      return message;
    }
  }
};
