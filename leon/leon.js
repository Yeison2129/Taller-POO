class Leon{
    constructor(edad,genero,color){
        this.edad=edad;
        this.genero=genero;
        this.color=color;
    }
//metodos

  levantarse(){
    console.log("el leon se levanta");
  }
  cazar(){
    console.log("el leon esta cazando su alimento");
  }
  comer(){
    console.log("el leon esta alimentandose");
  }
  bañarse(){
    console.log("el leon se esta bañando");
  }
  dormir(){
    console.log("el leon se esta durmiendo ");
  }

}

let leon = new Leon (1,"macho","cafe");
leon.levantarse();
leon.cazar();
leon.comer();
leon.bañarse();
leon.dormir();
console.log(leon.genero);