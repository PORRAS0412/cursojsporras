const metododepago = 'cheque';


switch(metododepago){
    case 'efectivo':
        console.log(`Pagaste por efectivo ${metododepago}`);
        break;
    case 'cheque':
            console.log(`Pagaste por efectivo ${metododepago}`);
            break;
    default:
        console.log('Metodo de pago no soportado');
        break;
    }