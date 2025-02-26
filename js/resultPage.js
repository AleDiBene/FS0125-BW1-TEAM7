
  function generateResults(correctAnswers, totalQuestions) {
  
    let correctPercentage = (correctAnswers / totalQuestions) * 100;
  let wrongPercentage = 100 - correctPercentage;
  
  document.getElementById("correct-text").innerText =
    `Correct: ${correctPercentage.toFixed(1)}% (${correctAnswers}/${totalQuestions} questions)`;
  document.getElementById("wrong-text").innerText =
    `Wrong: ${wrongPercentage.toFixed(1)}% (${totalQuestions - correctAnswers}/${totalQuestions} questions)`;
  let circumference = 2 * Math.PI * 40; 
  let correctCircle = document.getElementById("correct-circle");
  correctCircle.style.strokeDasharray = circumference;
  correctCircle.style.strokeDashoffset = circumference * (1 - correctPercentage / 100);
  
  let message = correctPercentage > 50 ?
    "Congratulations! You passed the exam.\nWe’ll send you the certificate in a few minutes. Check your email (including promotions / spam folder)." :
    "Please try again next time";
  document.getElementById("result-message").innerText = message;
}
