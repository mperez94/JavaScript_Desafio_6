alert ('Bienvenido a "Glops"');

alert ('Presione "F12" para ver el menu');

console.log ('""""""""""""""""""""""""GLOPS""""""""""""""""""""""""');
console.log ('~~~~~~~~~~~~~~~~BEBIDAS ALCOHOLICAS~~~~~~~~~~~~~~~~');
console.log ('VINO: $500');
console.log ('CERVEZA: $300');

console.log ('~~~~~~~~~~~~~~~~BEBIDAS SIN ALCOHOL~~~~~~~~~~~~~~~~');
console.log ('COCA: $200');
console.log ('JUGO: $100');
console.log ('~~~~~~~~~~~~~~~~DELIVERY~~~~~~~~~~~~~~~~');
console.log ('ENVIO A DOMICILIO: $200');

console.log ('~~~~~~~~~~~~~~~~SI SOS USUARIO 10% OFF~~~~~~~~~~~~~~~~');


// OBJETO CONSTRUCTOR
function bebida (valor, stock){

    this.valor = valor;
    this.cantidad = stock;

}

// ARRAY
var producto = ['Vino','Cerveza','Coca-Cola','Jugo de Naranja']


var usuario = prompt('Es usted usuario de GLOPS? si/no');
var vino = new bebida (500, 20);
var cerveza = new bebida ( 300, 10);
var coca = new bebida (200, 30);
var jugo = new bebida (100, 50);
var precioEnvio = 200;
var total = 0;
var totalDescuento = 0;

// FUNCIONES
function pedido2 (compra){

    if (compra == 'vino' && vino.cantidad > 0){

        vino.cantidad = vino.cantidad - 1;
        total = total + vino.valor;
        console.log ('su compra es ' + producto.filter(producto => producto == 'Vino') + ', se le agrego a su total $' + vino.valor + ' y quedan en stock ' + vino.cantidad);
        console.log ('Su total es de $' + total)
        
    }else if (compra == 'cerveza' && cerveza.cantidad > 0){

        cerveza.cantidad = cerveza.cantidad - 1;
        total = total + cerveza.valor;
        console.log ('su compra es ' + producto.filter(producto => producto == 'Cerveza') + ', se le agrego a su total $' + cerveza.valor + ' y quedan en stock ' + cerveza.cantidad);
        console.log ('Su total es de $' + total)

    }else if (compra == 'coca' && coca.cantidad > 0 || compra == 'coca cola' && coca.cantidad > 0 || compra == 'coca-cola' && coca.cantidad > 0 ){

        coca.cantidad = coca.cantidad - 1;
        total = total + coca.valor;
        console.log ('su compra es ' + producto.filter(producto => producto == 'Coca-Cola') + ', se le agrego a su total $' + coca.valor + ' y quedan en stock ' + coca.cantidad);
        console.log ('Su total es de $' + total)

    }else if (compra == 'jugo' && jugo.cantidad > 0 || compra == 'jugo de naranja' && jugo.cantidad > 0 || compra == 'naranja' && jugo.cantidad > 0){

        jugo.cantidad = jugo.cantidad - 1;
        total = total + jugo.valor;
        console.log ('su compra es ' + producto.filter(producto => producto == 'Jugo de Naranja') + ', se le agrego a su total $' + jugo.valor + ' y quedan en stock ' + jugo.cantidad);
        console.log ('Su total es de $' + total)

    }else {

        console.log ('PRODUCTO INCORRECTO O FUERA DE STOCK');

    }

}


function descuento(registrado){

    if (registrado == 'si'){

        totalDescuento = total - (total * 0.10);

    }else{

    }


}


const sumaTotal = (a,b) => a + b;

function delivery (envioDomicilio){


    if (envioDomicilio == "si" && usuario == 'si'){

        let totalEnvio = sumaTotal(totalDescuento, precioEnvio);
        console.log('Su total con el envio y el 10% OFF es de: $' + totalEnvio);
        let direccion = prompt ('Ingrese su direccion');
        console.log ('Su pedido sera enviado a ' + direccion);
        console.log('Gracias por su Compra');

    }else if (envioDomicilio == 'no' && usuario == 'si') {

        console.log('Su total con el 10% OFF es de: $' + totalDescuento);
        console.log('Gracias por su Compra');

    }else if (envioDomicilio == 'si' && usuario == 'no'){

        let totalEnvio = sumaTotal(total, precioEnvio);
        console.log('Su total con el envio es de: $' + totalEnvio);
        let direccion = prompt ('Ingrese su direccion');
        console.log ('Su pedido sera enviado a ' + direccion);
        console.log('Gracias por su Compra');

    }else{

        console.log('Retirar por sucursal');
        console.log('Gracias por su Compra');
    }

}


// DO WHILE
do{

    var compra = prompt ('Que bebida del menu quiere comprar?');

    pedido2(compra);

    var otraCompra = prompt ('Quiere otra bebida? si/no');
    

}
while (otraCompra != 'no');

var envio = prompt('Quiere que lo enviemos a su domicilio? si/no');


// LLAMADOS DE FUNCIONES
descuento(usuario)

delivery(envio)





