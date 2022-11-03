class Pokemon{
    
    constructor(nombre, tipo, vida, ataque, velocidad, defensa,img_frente,img_espaldas){
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.velocidad = velocidad;
        this.defensa = defensa;
        this.img_frente = img_frente
        this.img_espaldas = img_espaldas
    }

    show(){
        console.log(`Name: ${this.nombre}, Type: ${this.tipo}, Vida: ${this.vida}, Ataque: ${this.ataque}`);
    }

    atacar(pokemon){
        pokemon.vida -= this.ataque;
    }

    atacarEspecial(pokemon){
        pokemon.vida -= this.ataque * 2;
    }

    getVida(){
        return this.vida;
    }

    setVida(vida){
        this.vida = vida;
    }

    Defender(){
        return "Bloqueado";
    }
    
}
export default Pokemon;
