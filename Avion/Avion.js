class Avion{
    constructor(color,tamaño,capacidad){
        this.color=color;
        this.tamaño=tamaño;
        this.capacidad=capacidad;
    }
//metodos

  abordar(){
    console.log("personas subiendo al avion");
  }
  despegar(){
    console.log("avion despegando");
  }
  aterrizar(){
    console.log("avion aterrizando");
  }
  desembarcar(){
    console.log("personas bajando del avion");
  }
}

let avion1 = new Avion ("negro",280,2);
avion1.abordar();
avion1.despegar();
avion1.aterrizar();
avion1.desembarcar();
console.log(avion1.capacidad);