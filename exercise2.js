const getNumber = (fahrenheit) => {
    return fahrenheit -32;
}

const getCelcius = (fahrenheit) => {
    return getNumber(fahrenheit) *5/9
}

console.log(getCelcius(41))