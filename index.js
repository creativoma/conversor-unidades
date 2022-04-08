let inputValue = document.getElementById('input-num');
let inputDisplay = document.getElementById('input-value');
let lengthCalc = document.getElementById('length');
let volumeCalc = document.getElementById('volume');
let massCalc = document.getElementById('mass');
let errorMsg = document.getElementById('error-msg');

function submitNum() {
    
    let convertNumb = inputValue.value;
    if(convertNumb === "" || convertNumb == 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        inputDisplay.textContent = convertNumb;
        convertUnit();
        inputValue.value = inputValue.placeholder;
    }
}

function convertUnit(convertNumb) {
    convertNumb = inputValue.value;

    let feetNumb = convertNumb * 3.28084;
    let meterNumb = convertNumb * 0.3048;

    let literNumb = convertNumb * 4.54609;
    let gallonNumb = convertNumb * 0.219969;

    let kiloNumb = convertNumb * 0.453592;
    let poundNumb = convertNumb * 2.20462;

    const roundAccurately = (ccc, decimalPlaces) => Number(Math.round(ccc + "e" + decimalPlaces) + "e-" + decimalPlaces);
    
    feetNumb = roundAccurately(feetNumb, 3);
    meterNumb = roundAccurately(meterNumb, 3);
    literNumb = roundAccurately(literNumb, 3);
    gallonNumb = roundAccurately(gallonNumb, 3);
    kiloNumb = roundAccurately(kiloNumb, 3);
    poundNumb = roundAccurately(poundNumb, 3);
    convertNumb = roundAccurately(convertNumb, 3);

    lengthCalc.textContent = `${convertNumb} Metros = ${feetNumb} Pies | ${convertNumb} Pies = ${meterNumb} Metros`;
    volumeCalc.textContent = `${convertNumb} Litros = ${gallonNumb} Gallons | ${convertNumb} Galones = ${literNumb} Litros`;
    massCalc.textContent = `${convertNumb} Kilos = ${poundNumb} Libras | ${convertNumb} Libras = ${kiloNumb} Kilos`;
}