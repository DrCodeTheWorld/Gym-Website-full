function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(height === '' || weight === '') {
        alert("Please enter both height and weight.");
        return;
    }

    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    var result = "";

    if(bmi < 18.5) {
        result = "Underweight";
    } else if(bmi >= 18.5 && bmi < 24.9) {
        result = "Normal weight";
    } else if(bmi >= 24.9 && bmi < 29.9) {
        result = "Overweight";
    } else {
        result = "Obesity";
    }

    document.getElementById('result').innerHTML = `BMI: ${bmi.toFixed(2)} - ${result}`;
}
