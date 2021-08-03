const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-button");
const errorMessage = document.getElementById("error-message");
const nextButton = document.getElementById("next-button");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
const notesCount = document.querySelectorAll(".count");
const invalidAmountMessage = document.getElementById("invalid-amount");

nextButton.addEventListener("click", function validateBillAmount() {
  if (billAmount.value > 0) {
    document.getElementById("cashGiven-div").style.visibility = "visible";
  } else {
    document.getElementById("invalid-amount").className = "show";
    //document.getElementById("invalid-amount").style.visibility = "visible";
  }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
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

function calculateChange(amountToBeReturned) {
  for (i in availableNotes) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    notesCount[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
