function calculate(){
    const inputPrincipal = document.getElementById("principal");
    const inputRate = document.getElementById("rate");
    const inputYears = document.getElementById("years");
    const totalAmount = document.getElementById("total-amount");

    let principal = Number(inputPrincipal.value);
    let rate = Number(inputRate.value / 100);
    let years = Number(inputYears.value);

    if (principal < 0 || isNaN(principal)){
        principal = 0;
        inputPrincipal.value = 0;
    }
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        inputRate.value = 0;
    }
    if (years < 0 || isNaN(years)) {
        years = 0;
        inputYears.value = 0;
    }

    const result = principal * Math.pow(1 + (rate / 1), 1 * years);

    totalAmount.textContent = result.toLocaleString("en-US",
                                                    {style: "currency",
                                                    currency: "USD"});
}