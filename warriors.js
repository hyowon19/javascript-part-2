function Warrior (name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random() * 100) + 1;
    this.fight = function() {
        var pronoun = "his";
        if (this.gender.toUpperCase() === "F"){
            var pronoun = "her";
        }
        console.log (this.name + " " + "rushes to the arena with " + pronoun + " " + this.weapon)
        }
    };
    this.faceoff = function(opponent){
        var winner = opponent.name;
        if (this.power > opponent.power) {
            var winner = this.name;
        }
        console.log(winner + " " + "won the fight!")
    };
var Gundam = new Warrior("Gundam", "m");
var Peach = new Warrior("Peach", "f");
var R2D2 = new Warrior("R2D2", "m");
var Ronin = new Warrior("Ronin", "m");


console.log(Gundam.gender);
// console.log(Gundam.faceoff(Peach));
