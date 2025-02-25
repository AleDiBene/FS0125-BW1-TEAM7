//stelle//

const fStars = function () {
  const allStars = document.querySelectorAll("#formstar label")

  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener("click", function () {
      for (let k = 0; k < allStars.length; k++) {
        allStars[k].classList.remove("starBlue")
      }

      for (let j = 0; j <= i; j++) {
        allStars[j].classList.add("starBlue")
      }
    })
  }
}

fStars()
