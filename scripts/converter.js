var rl; //installment
var wp; //item value
var wr; //repurchase value
var n; //number of monthly installments
var r; //interest

function getValues() {
    rl = document.getElementById('rl');
    wp = document.getElementById('wp').value;
    wr = document.getElementById('wr').value;
    n = document.getElementById('n').value;
    r = document.getElementById('r').value * 0.01 / 12;
}

function calculate() {
    var temp = Math.pow((1 + r), n);
    var numerator = wp - wr / temp;
    var denominator = ((1 - 1 / temp) / r);
    return numerator / denominator;
}

function update() {
    getValues();
    rl.innerHTML = calculate().toFixed(2) + ' zł';
}