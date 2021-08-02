const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-button");
const errorMessage = document.getElementById("error-message");

checkButton.addEventListener("click", function validateBillAnsCashAmount() {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
