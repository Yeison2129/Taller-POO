class Yo{
    constructor(estatura,edad,genero,color,estudio){
        this.estatura=estatura;
        this.edad=edad;
        this.genero=genero;
        this.color=color;
        this.estudio=estudio;
    }
//metodos

  levantarse(){
    console.log("me estoy despertando");
  }
  desayunar(){
    console.log("estoy desayunando");
  }
  bañarse(){
    console.log("estoy tomando una ducha");
  }
  almorzar(){
    console.log("estoy almorzando");
  }
  estudiar(){
    console.log("estoy estudiando");
  }
  jugar(){
    console.log("estoy jugando con mis amigo ");
  }
  cenar(){
    console.log("estoy cenando");
  }
  dormir(){
    console.log("me procedo a ir a dormir");
  }

}

let yo = new Yo(1.80,17,"hombre","mono","en el sena");
yo.levantarse();
yo.desayunar();
yo.bañarse();
yo.almorzar();
yo.estudiar();
yo.jugar();
yo.cenar();
yo.dormir();
console.log(yo.edad);