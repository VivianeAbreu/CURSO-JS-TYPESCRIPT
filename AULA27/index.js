const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
// diaSemana = 7;
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        break;
        case 1:
        diaSemana = 'Segunda';
        break;
        case 2:
        diaSemana = 'Terça';
        break;
        case 3:
        diaSemana = 'Quarta';
        break;
        case 4:
        diaSemana = 'Quinta';
        break;
        case 5:
        diaSemana = 'Sexta';
        break;
        case 6:
        diaSemana = 'Sábado';
        break;
        default:
        diaSemanaTexto = '';
            break;
}

// if(diaSemana === 0) {
//  diaSemanaTexto = 'Domingo';
//  } else if (diaSemana === 1) {
//  diaSemanaTexto = 'Segunda';
//  } else if (diaSemana === 2) {
//  diaSemanaTexto = 'terça';
//  } else if (diaSemana === 3) {
//  diaSemanaTexto = 'quarta';
//  }else if (diaSemana === 4) {
//  diaSemanaTexto = 'quinta';
//  } else if (diaSemana === 5) {
//  diaSemanaTexto = 'sexta';
//  } else if (diaSemana === 6) {
//  diaSemanaTexto = 'sabado';
//  } else {
//  diaSemanaTexto = '';
//  }

console.log(diaSemana, diaSemanaTexto);

