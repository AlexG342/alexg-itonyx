function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubtractOperator").checked) {
            operator = document.getElementById("SubtractOperator").value;
        }
        if (document.getElementById("MultiOperator").checked) {
            operator = document.getElementById("MultiOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.getElementById("DivideOperator").value;
        }

        var result;
        
        /* if the operator was "Min" then set result to the minimum */
        if (operator == "Add") {
            result=(operand1fp+operand2fp);
        }
        /* if the operator was "Max" then set result to the maximum */
        if (operator == "Max") {
            if(operand1fp >= operand2fp && operand1fp >= operand3fp) {
                result = operand1fp;
            }
            if(operand2fp >= operand1fp && operand2fp >= operand3fp) {
                result = operand2fp;
            }
            if(operand3fp >= operand1fp && operand3fp >= operand2fp) {
                result = operand3fp;
            }
        }

        /* if operator was "Avg" the calcualute the average of 3 operands */
        if (operator == "avg") {
            result = (operand1fp + operand2fp);
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyrOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});