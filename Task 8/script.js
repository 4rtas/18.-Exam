/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calc(x1, x2) {
  this.sum = x1 + x2;
  this.sub = x1 - x2;
  this.multi = x1 * x2;
  this.div = x1 / x2;
  this.print = function () {
    console.log(`${this.sum} - sum
        ${this.sub} - sub
        ${this.multi} - multi
        ${this.div} - div`);
  };
}

const num = new calc(7, 1);
num.print();
