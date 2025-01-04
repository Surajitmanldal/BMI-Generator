document.getElementById("Calculate").addEventListener("click", () => {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid numbers for height and weight.";
    return;
  }

  height *= 0.3048;// this is convert foot into meter;
  let hightSquare = height * height;// square of hight
  let bmi = weight / hightSquare;
  // this will rounded 2 numbers after decimal;
  bmi = bmi.toFixed(2);
  document.getElementById("result").innerHTML = `Your BMI is :- ${bmi}`;
  // this will remove the active class  when we are want to check the BMI RATE again
  document.querySelectorAll(".check").forEach((e) => {
    e.classList.remove("active");
  })
  if (bmi < 18.5)
    document.getElementById("under").classList.add("active");
  // document.getElementById("under").style.color="green";
  else if (bmi >= 18.5 && bmi <= 24.9)
    document.getElementById("normal").classList.add("active");
  else {
    document.getElementById("over").classList.add("active");
  }
});



