

// Fees Calculator
// https://ntimmy.vpl.ca/node/6

function getTotalFees() {
  var input = document.getElementsByName("service");
  var fees = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        fees += parseFloat(input[i].value);
      }
    }
  document.getElementById("totalFees").innerHTML = "<h3>Estimated fees </h3>$" + fees.toFixed(2) + "+";
}


// Flat Fees Calculator (Alternative)
// https://ntimmy.vpl.ca/node/7

function getTotalFlatFees() {
  var input = document.getElementsByName("flat-fee-service");
  var flatFees = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        flatFees += parseFloat(input[i].value);
      }
    }
  document.getElementById("totalFlatFees").innerHTML = "<strong>Estimated fees </strong>$" + flatFees + "+";
}

// Hourly Fees Calculator (Alternative)
// https://ntimmy.vpl.ca/node/7

function getTotalHourlyFees() {
  var input = document.getElementsByName("hourly-fee-service");
  var textInput = document.getElementById("total-hours");
  var hourlyFees = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        hourlyFees += parseFloat(input[i].value);
      }
    }
    
  document.getElementById("totalHourlyFees").innerHTML = "<strong>Estimated fees </strong>$" + hourlyFees * parseInt(textInput.value) + "+";
}