const validPin = 9911;
const addMoney = document.getElementById("btn-add-money");

function showAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  const alertMsg = document.getElementById("alert-message");
  alertMsg.textContent = message;
  alertBox.classList.remove("hidden");

  document.getElementById("alert-ok").onclick = () => {
    alertBox.classList.add("hidden");
  };
}
addMoney.addEventListener("click", function (event) {
  event.preventDefault();

  const bank = document.getElementById("bank").value;
  const accNum = document.getElementById("acc-num").value;
  const amountStr = document.getElementById("amount").value;
  const amount = Number(amountStr);
  const pinNum = parseInt(document.getElementById("pin-num").value);

  if (bank === "") {
    showAlert("Please choose your bank");
    return;
  }
  if (accNum.length !== 11 || isNaN(accNum)) {
    showAlert("Please provide a valid account number");
    return;
  }
  if (!amountStr || isNaN(amount)) {
    showAlert("Please enter a valid amount");
    return;
  }
  if (amount < 100) {
    showAlert("Minimum amount is '100'");
    return;
  }
  if (pinNum !== validPin) {
    showAlert("Please provide the valid PIN");
    return;
  } else {
    showAlert("Money added successfully to your wallet");
  }
  // adding balance
  const balance = parseInt(document.getElementById("balance").innerText);
  const newBalance = amount + balance;
  document.getElementById("balance").innerText = newBalance;

  // ফর্ম ফিল্ড ফাঁকা করা
  document.getElementById("bank").value = "";
  document.getElementById("acc-num").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("pin-num").value = "";
});

// toggler section
document.getElementById("add-money-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("cash-out-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("transfer-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer").style.display = "block";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("get-bonus-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("get-bonus").style.display = "block";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("pay-bill-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("transaction").style.display = "none";
});
document.getElementById("transaction-tg").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transaction").style.display = "block";
});

