document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.getElementById('inputUnit').value;

    if (isNaN(temperature)) {
        document.getElementById('output').innerText = "Please enter a valid number";
        return;
    }

    let convertedTemp;
    let outputUnit;

    switch(unit) {
        case 'Celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C, Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)} °C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            convertedTemp = "Invalid unit";
    }

    document.getElementById('output').innerText = convertedTemp;
});
