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
      if (hoursDay[i] === hour) {
        switch (hour) {
          case 13:
            hour = 1;
            break;
          case 14:
            hour = 2;
            break;
          case 15:
            hour = 3;
            break;
          case 16:
            hour = 4;
            break;
          case 17:
            hour = 5;
            break;
          case 18:
            hour = 6;
            break;
          case 19:
            hour = 7;
            break;
          case 20:
            hour = 8;
            break;
          case 21:
            hour = 9;
            break;
          case 22:
            hour = 10;
            break;
          case 23:
            hour = 11;
            break;
        }
        message = `La hora en formato de a.m., p.m., es: ${hour} ${pm}`;
        return message;
      }
    }
  }
};
