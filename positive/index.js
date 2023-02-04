
function bold() {
  let a = document.getElementById(`positive`);
  a.style.color = "#927f7f";
  a.style.fontWeight = "700";
  document.getElementById(`content`).innerHTML = "Positive content";
  let b1 = document.getElementById(`negative`);
  b1.style.color = "#c2c2c2";
  b1.style.fontWeight = "500";
  let c1 = document.getElementById(`natural`);
  c1.style.color = "#c2c2c2";
  c1.style.fontWeight = "500";

  return a;
}

let bold2 = () => {
  let b = document.getElementById(`negative`);
  b.style.color = "#927f7f";
  b.style.fontWeight = "700";
  document.getElementById(`content`).innerHTML = "Negative content";
  let a1 = document.getElementById(`positive`);
  a1.style.color = "#c2c2c2";
  a1.style.fontWeight = "500";
  let c1 = document.getElementById(`natural`);
  c1.style.color = "#c2c2c2";
  c1.style.fontWeight = "500";

  return b;
}

let bold3 = () => {
  let c = document.getElementById(`natural`);
  c.style.color = "#927f7f";
  c.style.fontWeight = "700";
  document.getElementById(`content`).innerHTML = "Natural content";
  let a1 = document.getElementById(`positive`);
  a1.style.color = "#c2c2c2";
  a1.style.fontWeight = "500";
  let b1 = document.getElementById(`negative`);
  b1.style.color = "#c2c2c2";
  b1.style.fontWeight = "500";

  return c;
}

