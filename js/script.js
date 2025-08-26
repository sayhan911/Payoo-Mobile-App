// login button
const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("clicked")
  const mobileNum = +8801919631331;
  const pinNum = 9911;

  const mobNumValue = document.getElementById("mobile-num").value;
  const mobNumValueConv = parseInt(mobNumValue);

  const pinNumValue = document.getElementById("pin-num").value;
  const pinNumValueConv = parseInt(pinNumValue);

  // console.log(mobNumValueConv, pinNumValueConv)

  if (mobNumValueConv === mobileNum && pinNumValueConv === pinNum) {
    console.log("matched");
  } else {
    console.log("not matched");
  }
});
