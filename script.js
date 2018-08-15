const alphabet = [48-90]

const key = parseInt(e.detail || e.which);

document.getElementById("firstname").addEventListener("keydown", (e) => {
  console.log(e)
  const key = parseInt(e.detail || e.which);
  if (key === alphabet) {
  document.getElementById("initial1").innerHTML = e['key'];
  }
  else {}
})

document.getElementById("secondname").addEventListener("keydown", (e) => {
  console.log(e)
  document.getElementById("initial2").innerHTML = e['key'];
})

document.getElementById("firstname").addEventListener("keydown", (e) => {
  console.log(e)

  document.getElementById("fullname1").innerHTML += e['key'];
})

document.getElementById("secondname").addEventListener("keydown", (e) => {
  console.log(e)
  document.getElementById("fullname2").innerHTML = secondname += e['key'];
})