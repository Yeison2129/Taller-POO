class Persona{
    constructor(estatura,peso){
        this.estatura=estatura;
        this.peso=estatura;
    }
//metodos

  levantarse(){
    console.log("persona levantandose");
  }
  desayunar(){
    console.log("persona desayunando");
  }
}

let persona = new Persona (1.80,57);
persona.levantarse();
persona.desayunar();
console.log(persona.peso);