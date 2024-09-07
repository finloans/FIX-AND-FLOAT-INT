function calculateEMI() {
    // Get input values
    let loanAmount = document.getElementById('loanAmount').value;
    let floatingRate = document.getElementById('floatingRate').value;
    let fixedRate = document.getElementById('fixedRate').value;
    let tenure = document.getElementById('tenure').value;

    // Convert tenure from years to months
    let months = tenure * 12;

    // Calculate EMI for floating interest rate
    let monthlyFloatingRate = (floatingRate / 12) / 100;
    let emiFloating = (loanAmount * monthlyFloatingRate * Math.pow((1 + monthlyFloatingRate), months)) / 
                      (Math.pow((1 + monthlyFloatingRate), months) - 1);

    // Calculate EMI for fixed interest rate
    let monthlyFixedRate = (fixedRate / 12) / 100;
    let emiFixed = (loanAmount * monthlyFixedRate * Math.pow((1 + monthlyFixedRate), months)) / 
                   (Math.pow((1 + monthlyFixedRate), months) - 1);

    // Display the results
    document.getElementById('emiResult').innerHTML = `
        <strong>Floating EMI: ₹${emiFloating.toFixed(2)}</strong><br>
        <strong>Fixed EMI: ₹${emiFixed.toFixed(2)}</strong>
    `;
}
