const prompt = require('prompt-sync')()

class Heroi{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    ataque(){
        let attack = "soco";
        if(this.type == "mago"){
            attack = "magia";
        }
        else if(this.type == "guerreiro"){
            attack = "espada";
        }
        else if(this.type == "monge"){
            attack = "artes marciais";
        }
        else if (this.type == "ninja"){
            attack = "shuriken";
        }
        console.log(`O ${this.type} atacou usando ${attack}`);
    }
}

let name = prompt("Nome do heroi: ");
let age = prompt("Idade do heroi: ");
let type = prompt("Tipo do heroi: ");
let heroi = new Heroi(name, age, type);

heroi.ataque();