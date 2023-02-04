let a = document.getElementById(`one`);
let a1 = document.getElementById("title");
let b = document.querySelector(`#two`);
let b1 = document.querySelector(`#desc`);
let c = document.querySelector(`#three`);
let c1 = document.querySelector(`#data`);


let k = 0;

let funcZero = () => {
  b.style.color = "#000";
  b.style.fontWeight = "500";
  b.style.background = "#a8a7a7";
  b1.style.fontWeight = "600";
  b1.style.color = "#838282";

  c.style.color = "#000";
  c.style.fontWeight = "500";
  c.style.background = "#a8a7a7";
  c1.style.fontWeight = "600";
  c1.style.color = "#838282";

  bText.innerHTML = "Choose title content";
  bDiffer.style.display = "block";
  bIkki1.style.display = "none";
  bIkki2.style.display = "none";
  bUch1.style.display = "none";
  bUch2.style.display = "none";

  k = 0;
}

let bText = document.querySelector(`.tText`);
let bDiffer = document.querySelector(`#differ`);
let bSub = document.querySelector(`#sub`);
let bIkki1 = document.querySelector(`#ikki1`);
let bIkki2 = document.querySelector(`#ikki2`);
let bUch1 = document.querySelector(`#uch1`);
let bUch2 = document.querySelector(`#uch2`);


function func2() {
  b.style.color = "#fff";
  b.style.fontWeight = "600";
  b.style.background = "#475ec5";
  b1.style.fontWeight = "700";
  b1.style.color = "#000";
  bText.innerHTML = "Choose description content";
  bDiffer.style.display = "none";
  bIkki1.style.display = "block";
  bIkki2.style.display = "block";
  bUch1.style.display = "none";
  bUch2.style.display = "none";

  c.style.color = "#000";
  c.style.fontWeight = "500";
  c.style.background = "#a8a7a7";
  c1.style.fontWeight = "600";
  c1.style.color = "#838282";

  k += 1;
}
let func3 = () => {
  if (k > 0) {
    c.style.color = "#fff";
    c.style.fontWeight = "600";
    c.style.background = "#475ec5";
    c1.style.fontWeight = "700";
    c1.style.color = "#000";
    bText.innerHTML = "Are you happy now?";
    bUch1.style.display = "block";
    bUch2.style.display = "block";
    bIkki1.style.display = "none";
    bIkki2.style.display = "none";
  }

}

let ikki2 = () => {
  c.style.color = "#fff";
  c.style.fontWeight = "600";
  c.style.background = "#475ec5";
  c1.style.fontWeight = "700";
  c1.style.color = "#000";
  bUch1.style.display = "block";
  bUch2.style.display = "block";
  bIkki1.style.display = "none";
  bIkki2.style.display = "none";
  bText.innerHTML = "Are you happy now?";
}

let ikki1 = () => {
  b.style.color = "#000";
  b.style.fontWeight = "500";
  b.style.background = "#a8a7a7";
  b1.style.fontWeight = "600";
  b1.style.color = "#838282";

  bText.innerHTML = "Choose title content";
  bDiffer.style.display = "block";
  bIkki1.style.display = "none";
  bIkki2.style.display = "none";

  k = 0;
}



let uch2 = () => {
  bText.innerHTML = "Ok we're done! Thanks for sending your data! ";
  bUch1.style.display = "none";
  bUch2.style.display = "none";
}

let uch1 = () => {
  b.style.color = "#fff";
  b.style.fontWeight = "600";
  b.style.background = "#475ec5";
  b1.style.fontWeight = "700";
  b1.style.color = "#000";
  bText.innerHTML = "Choose description content";
  bDiffer.style.display = "none";
  bIkki1.style.display = "block";
  bIkki2.style.display = "block";
  bUch1.style.display = "none";
  bUch2.style.display = "none";

  c.style.color = "#000";
  c.style.fontWeight = "500";
  c.style.background = "#a8a7a7";
  c1.style.fontWeight = "600";
  c1.style.color = "#838282";
}

