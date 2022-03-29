// 6° : Sort an array from lowest to highest

let arrayTb = [Math.floor(Math.random() * 100)];
for (let i = 0; i < 10; i++) 
{
    arrayTb.push(Math.floor(Math.random() * 100))
}

function sort(array){
    let result = array.sort();
    console.log(result);
}


sort(arrayTb);
