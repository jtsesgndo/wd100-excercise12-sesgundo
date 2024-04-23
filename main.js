function setCentimeters(){
    let input = Number (document.querySelector("#input").value);

    let result = input * .1;
    // alert("#result");
    document.querySelector("#result").innerHTML = result;
}

function setMeters(){
    let input = Number (document.querySelector("#input").value);

    let result = input / 1000;
    // alert("#result");
    document.querySelector("#result").innerHTML = result;
}
function setKilometers(){
    let input = Number (document.querySelector("#input").value);

    let result = input / 1000000;
    // alert("#result");
    document.querySelector("#result").innerHTML = result;
}


