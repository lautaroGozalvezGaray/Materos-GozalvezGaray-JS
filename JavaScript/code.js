
alert("Bienvenido a materos, tenemos un producto para cada necesidad");

let producto=prompt("seleccione un un prodcuto: mates, termos, mochilas");

alert("usted selecciono " + producto);

again="";

const productosSeleccionados=[];

do{
    if(producto=="mates"){
        again="";
        do{
            productoMate=(prompt("seleccione un producto: 1)mate1 2)mate2 3)mate3 4)mate4"));

            class Mate{
                constructor(mate, precio){
                    this.mate=mate;
                    this.precio=precio;
                }
                sumarIva(){
                    this.precio*=1.21;
                }
            }

            if(productoMate=="mate1"){
                productosSeleccionados.push(mate1= new Mate ("mate1", 1000));
                mate1.sumarIva();
            }else if(productoMate=="mate2"){
                productosSeleccionados.push(mate2= new Mate ("mate2", 2500));
                mate2.sumarIva();
            }else if(productoMate=="mate3"){
                productosSeleccionados.push(mate3= new Mate ("mate3", 3200));
                mate3.sumarIva();
            }else if(productoMate=="mate4"){
                productosSeleccionados.push(mate4= new Mate ("mate4", 4510));
                mate4.sumarIva();
            }
            
            again=prompt("desea agregar otro mate, escriba si o no");
        }while(again!="no")

        console.log(productosSeleccionados);

        
    }else if(producto=="termos"){
        again="";
        do{
            productoTermo=(prompt("seleccione un producto: 1)termo1 2)termo2 3)termo3 4)termo4"));

            class Termo{
                constructor(termo, precio){
                    this.termo=termo;
                    this.precio=precio;
                }
                sumarIva(){
                    this.precio*=1.21;
                }
            }

            if(productoTermo=="termo1"){
                productosSeleccionados.push(termo1= new Termo ("termo1", 2500));
                termo1.sumarIva();
            }else if(productoTermo=="termo2"){
                productosSeleccionados.push(termo2= new Termo ("termo2", 4000));
                termo2.sumarIva();
            }else if(productoTermo=="termo3"){
                productosSeleccionados.push(termo3= new Termo ("termo3", 4800));
                termo3.sumarIva();
            }else if(productoTermo=="termo4"){
                productosSeleccionados.push(termo4= new Termo ("termo4", 4650));
                termo4.sumarIva();
            }
            again=prompt("desea agregar otro termo, escriba si o no");
        }while(again!="no")

        console.log(productosSeleccionados);



    }else if(producto=="mochilas"){

        again="";
        do{
            productoMochila=(prompt("seleccione un producto: 1)mochila1 2)mochila2 3)mochila3 4)mochila4"));

            class Mochila{
                constructor(mochila, precio){
                    this.mochila=mochila;
                    this.precio=precio;
                }
                sumarIva(){
                    this.precio*=1.21;
                }
            }

            if(productoMochila=="mochila1"){
                productosSeleccionados.push(mochila1= new Mochila ("mochila1", 5000));
                mochila1.sumarIva();
            }else if(productoMochila=="mochila2"){
                productosSeleccionados.push(mochila2= new Mochila ("mochila2", 6750));
                mochila2.sumarIva();
            }else if(productoMochila=="mochila3"){
                productosSeleccionados.push(mochila3= new Mochila ("mochila3", 8500));
                mochila3.sumarIva();
            }else if(productoMochila=="mochila4"){
                productosSeleccionados.push(mochila4= new Mochila ("mochila1", 11000));
                mochila4.sumarIva();
            }
            again=prompt("desea agregar otra mochila, escriba si o no");
        }while(again!="no")

        console.log(productosSeleccionados);
        




    }
    







}while(again!="no");





































































