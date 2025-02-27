//stelle//

const fStars = function () {
  const allStars = document.querySelectorAll("#formstar label")

  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener("click", function () {
      //aggiungo il click alla stelle
      for (let k = 0; k < allStars.length; k++) {
        allStars[k].querySelector("img").classList.remove("starOriginal") //rimuovo colore stella
        allStars[k].querySelector("img").classList.add("starDark") //aggiungo colore nero stella
      }

      for (let j = 0; j <= i; j++) {
        allStars[j].querySelector("img").classList.add("starOriginal") //riaggiungo il colore dell'immagine
        allStars[j].querySelector("img").classList.remove("starDark") //rimuovo il colore nero!
      }
    })
  }
}

fStars()
