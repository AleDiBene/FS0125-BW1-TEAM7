//stelle//

const fStars = function () {
  const allStars = document.querySelectorAll("#formstar label")

  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener("click", function () {
      for (let k = 0; k < allStars.length; k++) {
        allStars[k].querySelector("img").classList.remove("starOriginal")
        allStars[k].querySelector("img").classList.add("starDark")
      }

      for (let j = 0; j <= i; j++) {
        allStars[j].querySelector("img").classList.add("starOriginal")
        allStars[j].querySelector("img").classList.remove("starDark")
      }
    })
  }
}

fStars()
