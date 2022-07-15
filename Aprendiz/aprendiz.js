class Aprendiz{
    constructor(estatura,peso){
        this.estatura=estatura;
        this.peso=peso;
    }
//metodos

  estudiar(){
    console.log("Aprendiz estudiando");
  }
  tarea(){
    console.log("Aprendiz haciendo la tarea");
  }
}

let aprendiz = new Aprendiz (1.80,57);
aprendiz.estudiar();
aprendiz.tarea();
console.log(aprendiz.peso);