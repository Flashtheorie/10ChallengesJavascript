// 3°: 3. Create a length converter function


const km = parseInt(prompt("Combien de km ?"));

function convert(km)
{
    let miles = (km * 0.621371);
    miles = miles.toFixed(2);
    document.write(km + "km font " + miles + "miles");
}

convert(km);