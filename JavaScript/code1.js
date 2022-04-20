
alert("Bienvenido a materos, tenemos un producto para cada necesidad. Mates, termos y mochilas");

class Productos{
    constructor(categoria, precio, tipo){
        this.categoria=categoria;
        this.precio=precio;
        this.tipo=tipo;
    }
    sumarIva(){
        this.precio*=1.21;
    }
}

//creacion de productos con sus caracteristicas

producto1 = new Productos("mate", 1000, "mate de calabaza");
producto2 = new Productos("mate", 2500, "mate de madera");
producto3 = new Productos("mate", 4000, "mate de grande");
producto4 = new Productos("mate", 5800, "mate de chico");
producto5 = new Productos("termo", 8000, "mate de cuero");
producto6 = new Productos("termo", 9000, "termo 1.5l");
producto7 = new Productos("termo", 8500, "termo 1l");
producto8 = new Productos("termo", 5000, "termo economico");
producto9 = new Productos("termo", 7800, "termo con pico");
producto10 = new Productos("termo", 6000, "termo economico 1.5");
producto11 = new Productos("mochila", 12000, "mochila grande");
producto12 = new Productos("mochila", 10000, "mochila chica");
producto13 = new Productos("mochila", 13500, "mochila grande con bolcillo");
producto14 = new Productos("mochila", 15000, "mochila grande roja");
producto15 = new Productos("mochila", 18000, "mochila grande azul");

//se crea un array para almacenar todos los productos.
stock=[];
stock.push(producto1, producto2, producto3, producto4, producto5,
     producto6,producto7,producto8,producto9,producto10,producto11,
     producto12,producto13,producto14,producto15);

//se le suma iva a cada producto
for (const productos of stock){
    productos.sumarIva();
}

let seleccion= prompt("seleccione un producto. Mate, termo, mochila");
alert("Usted selecciono: " + seleccion);
let mostrar = stock.filter(productos=>productos.categoria==seleccion);

console.log(mostrar);

comprarSeleccionados=[];//productos que el cliente quiere comprar.

do{

    if(seleccion=="mate"){
        again=""
        do{
            alert("de acuerdo al filtado agrege los productos que desee")
            

        }while(again!="no")


        
    }else if(seleccion=="termo"){

    }else if(seleccion=="mochila"){

    }
}while(again="salir");
































































