let fahrenheit = document.getElementById("fahrenheitField");
let convert = document.getElementById("convert");
let result = document.getElementById("result")

convert.addEventListener('click' , onConvertBtnClicked);

function onConvertBtnClicked() {
    if (fahrenheit.value === "") {
        result.innerHTML = (`Please put a number.`);

    }
    else {
        answer = (fahrenheit.value - 32) * 5/9;
        result.innerHTML = (`${fahrenheit.value}° F  is ${(answer).toFixed(3)}°  C.`);

    }
    
}