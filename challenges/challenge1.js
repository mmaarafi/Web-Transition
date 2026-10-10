// Challenge 1: The Memory-Efficient Blueprint


function Weapon(name, ammo)
{
    this.name = name
    this.ammo = ammo
}

Weapon.prototype.shoot = function shoot()
{
    this.ammo--
    console.log(this.ammo)
}

var ak47 = new Weapon("ak47", 30)
var awp = new Weapon("awp", 5)

console.log(ak47.shoot() === awp.shoot());