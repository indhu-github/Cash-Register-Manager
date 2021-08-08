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
    document.getElementById("next-button").style.display = "none";
    document.getElementById("invalid-amount").className = "";
  } else {
    document.getElementById("invalid-amount").className = "show";
  }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  console.log(billAmount.value, cashGiven.value);
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      if (amountToBeReturned == 0) {
        showMessage("No return amount");
      } else {
        calculateChange(amountToBeReturned);
      }
    } else {
      document.querySelector(".change-table").style.visibility = "hidden";
      showMessage("Do you wanna wash the plates?");
    }
  } else {
    document.querySelector(".change-table").style.visibility = "hidden";
    showMessage("Invalid bill amount");
  }
});

function calculateChange(amountToBeReturned) {
  document.querySelector(".change-table").style.visibility = "visible";
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
  errorMessage.className = "show";
}
