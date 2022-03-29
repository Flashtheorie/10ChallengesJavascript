// 2. Print a table containing multiplication tables

const number = prompt("Quel chiffre ?");

for (let i = 1; i <= 10; i++) 
{
    document.write(number +"*"+  i + " = " + (number*i) + "<br>");
}