// function Car(name, year, color) {
//     this.name = name
//     this.color = color
//     this.year = year;
// }

// Car.prototype.turnOn = function () {
//     console.log(this.name + " has turned on")
// }
// console.log(Car)

// // const bmw = new Car("bmw", 1999, "yellow");
// // bmw.turnOn();
// // console.log(bmw);
// // console.log(bmw.__proto__);
// // // console.log(bmw.__proto__.turnOn.__proto__);
// // var hello = "hello"
// // console.log(Object.__proto__);
// // console.log("hello world");

// function bmw(name, year, color, maxspeed) {func
//     this.name = name
//     this.year = year
//     this.color = color
//     this.maxspeed = maxspeed
// }

// bmw.prototype = Object.create(Car.prototype)
// bmw.prototype.constructor = bmw;

// var m4 = new bmw("m4", 2001, "grey blue stripes", 999);
// console.log(bmw);
// console.log(m4)
// m4.turnOn();


// function Weapon(name, ammo)
// {
//     this.name = name
//     this.ammo = ammo
// }

// Weapon.prototype.shoot = function shoot()
// {
//     this.ammo--
//     console.log(this.ammo)
// }

// var ak47 = new Weapon("ak47", 30)
// var awp = new Weapon("awp", 5)

// console.log(ak47.shoot === awp.shoot);

// function Player() {
//     this.health = 100;
// }

// Player.prototype.takedamage = function takedamage(damage) {
//     this.health -= damage
//     console.log(`new health ${this.health}`)
// }

// function Hero() {
//     Player.call(this)
// }

// Hero.prototype = Object.create(Player.prototype)
// Hero.prototype.constructor = Hero

// var newHero = new Hero();
// console.log(newHero);

// newHero.takedamage(50);

// function Hero(name) {
//   this.name = name;
// }

// Hero.prototype.castUltimate = function() {
//   console.log(this.name + " is winding up...");
  
//   // The delay simulates a 2-second cast time
//   setTimeout(function() {
//     console.log(this.name + " unleashes their ultimate!");
//   }.bind(this), 2000);
// };

// let spiderman = new Hero("Spider-Man");
// spiderman.castUltimate();

String.prototype.yell = function yell()
{
    return this.toUpperCase() + "!!!"
}


var input = "gg wp"
console.log(input.__proto__);
console.log(input.yell())