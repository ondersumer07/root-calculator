// BIR SAYININ GİRİLEN DERECEDKİ KÖKÜNÜ ALMA
function sqrt() {
    let sayi = document.querySelector("#number1").value;
    let derece = document.querySelector("#number2").value;

    let kok = Math.pow(sayi, (1/derece));

    document.querySelector("p").innerHTML = ("The root of number " + sayi + " from " + derece + ". degree is " + kok);

    return kok;
}