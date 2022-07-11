function run() {
  let alter = document.querySelector("#alter").value;
  alter = +alter;

  if (alter >= 21) {

    window.open( "https://www.goldbarnewyork.com/", target="_blank");// Damit wird das Fenster in einem neuen tab geöffnet
    /* location.replace("https://www.goldbarnewyork.com/"); */ // Damit wird das Fenster ausgetauscht
  } else {
    alert("Du bits leider zu Jung");
  }
}
