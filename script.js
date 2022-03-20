function compute()
{
    var principal = document.getElementById("principal").value;
    // check for valid input of principal
    if (principal <0) {
        alert("Enter a positive number");
        document.getElementById("principal").value = '';
        document.getElementById("principal").focus();
        document.getElementById("result").innerText='';
    } else { // if valid input calculate interest
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerText=`
        If you desposit ${principal}
        at an interest rate of ${rate}%.
        You will receive an amount of ${interest},
        in the year ${year}.`;
    }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        