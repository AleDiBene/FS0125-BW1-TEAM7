//stelle//

const fStars = function () {
  const allStars = document.querySelectorAll("#formstar label")

  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener(`click`, function () {
      console.log("stella cliccata")
    })
  }
}

fStars()
