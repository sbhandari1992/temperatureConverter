let celsius = document.getElementById("celsiusField");
let convert = document.getElementById("convert");
let result = document.getElementById("result")

convert.addEventListener('click' , onConvertBtnClicked);

function onConvertBtnClicked() {
    if (celsius.value === "") {
        result.innerHTML = ('Please put a number.');
    }
    else {
        answer = (celsius.value *9/5) + 32;
        result.innerHTML = (`${celsius.value}° C is ${answer}° F`);

    }
}