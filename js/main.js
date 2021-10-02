//Уровень 1) Есть два корабля, первый корабль имеет  HP (Health Points) 100, Damage 4, второй корабль имеет HP 40, damage 15. Описать объектами.
//В одной итерации стреляют друг в друга. Вывести лог боя. Определить победителя.


const ship1 = {health: 100, damage: 4,};
const ship2 = {health: 40, damage: 15,};
let a = ship1.health;
let b = ship2.health;

const fight = () => {  
  while (a > 0 || b > 0) {
    a -= ship2.damage;
    b -= ship1.damage;    
  }
  if (a > b) {
    console.log('The ship1 is winner!');
  } else {
    console.log('The ship2 is winner!');
  }
}
fight();