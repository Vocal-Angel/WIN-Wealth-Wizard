
document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const P = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value) / 100;
    const t = parseInt(document.getElementById('years').value);
    const n = parseInt(document.getElementById('compounds').value);

    const A = P * Math.pow((1 + r / n), n * t);
    document.getElementById('result').innerHTML = 
        `<h2>Future Value: £${A.toFixed(2)}</h2>`;
});
