const billAmount = document.getElementById("bill__amount");
const buttons = document.querySelectorAll(".buttons");
const tipValue = document.getElementById("tip-price");
const noPeople = document.getElementById("people");
const tipAmount = document.getElementById("total-price");
const totalAmount = document.getElementById("total-price");
const resetAll = document.getElementById("reset");

let tipPercent = 0;

// Grab tip pecent from buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    tipPercent = Number(e.target.value);
  });
});

const calcTip = (tip) => {
  let bill = Number(billAmount.value);
  let noPeopleNum = Math.round(Number(noPeople.value));

  let tipAmount1 = Math.round(Number(bill * `0.${tip}`) / noPeopleNum);

  let amount = (bill + tipAmount1) / noPeopleNum;
  //   let tipPerson = tipAmount1 / noPeopleNum;

  //   console.log(noPeopleNum);
  //   console.log(tipAmount);
  //   console.log(bill + tipAmount);
  tipValue.innerHTML = `$${tipAmount1 / noPeopleNum}`;
  totalAmount.innerHTML = `$${amount}`;
};

// calcTip(tipPercent);

noPeople.addEventListener("keypress", (e) => {
  resetAll.disabled = false;
  resetAll.classList.toggle("active");
  //   console.log(e);
  if (e.key === "Enter") calcTip(tipPercent || tipValue);
});

resetAll.addEventListener("click", () => {
  billAmount.value = "";
  tipValue.value = "";
  noPeople.value = "";
});
