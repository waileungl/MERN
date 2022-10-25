import {Ninja} from "./ninja_class.js"

export class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom){
        super(name, health = 200, speed = 10, strength = 10)
        this.widsom = wisdom;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        super.drinkSake();
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();