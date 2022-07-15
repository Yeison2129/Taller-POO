class Moto{
    constructor(color,marca,estado){
        this.color=color;
        this.marca=marca;
        this.estado=estado;
    }
//metodos

  subirse(){
    console.log("subiendo a la moto");
  }
  encender(){
    console.log("encendiendo la moto");
  }
  apagado(){
    console.log("apagar la moto");
  }

}

let moto1 = new Moto ("negro","akt","nueva");
moto1.subirse();
moto1.encender();
moto1.apagado();
console.log(moto1.marca);