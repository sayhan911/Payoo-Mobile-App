// here are different ways for toggling

// 1st and noob way
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
  
  // 2nd way by 'for of' loop
  const sections = ["add-money","cash-out","transfer","get-bonus","pay-bill","transaction"];
  
  for (const id of sections) {
    document.getElementById(id + "-tg").onclick = () => {
      for (const sec of sections) {
        document.getElementById(sec).style.display = sec === id ? "block" : "none";
      }
    };
  }
  
  // 3rd way
  const sections2 = ["add-money","cash-out","transfer","get-bonus","pay-bill","transaction"];
  
  sections2.forEach(id => {
    document.getElementById(id+"-tg").onclick = () => {
      sections2.forEach(sec => {
        document.getElementById(sec).style.display = sec === id ? "block" : "none";
      });
    };
  });
  