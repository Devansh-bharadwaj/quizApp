var quizData = [];
let answers = [];
let answersSelected = [];
$(document).ready(function () {
  var url = "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz";
  // console.log(quizData)
  $.get(url, function (data) {
    quizData = data;
    console.log(quizData)
    quizData?.forEach(function (item, i) {
      // console.log(item, i);
      answers.push(item.answer)
      $(`.inner-box:nth-child(${i + 1}) h3`).text(
        `Q${i + 1}.` + quizData[i].question
      );

      quizData[i]?.options?.forEach((option, j) => {

        var ele = document.createElement("div");
        ele.classList.add("row");
        var elem = document.createElement("input");
        elem.type = "radio";
        elem.name = "option" + i;
        elem.value = j + 1;
        elem.id = j;
        elem.required = true;
        // elem.setAttribute("required", true);
        elem.classList.add("answer");
        // elem.setAttribute("id", `ans${j+1}`);
        // console.log(elem)
        var elem2 = document.createElement("label");
        elem2.setAttribute("for", `ans${j+1}`)
        // console.log(elem2)
        elem2.classList.add("options");
        elem2.innerText = option;
        elem2.setAttribute("id", `option${j+1}`);
        ele.appendChild(elem);
        ele.appendChild(elem2);
        $(`.inner-box:nth-child(${i + 1})`).append(ele);
      });
    });
    console.log(answers)
  });
});

let ele = document.getElementById("marks");
ele.innerHTML = 0 + "/5";
function submitAnswers() {
  event.preventDefault();
var nodes = document.querySelectorAll("input[type=radio]:checked");
// console.log(nodes)
let score = 0;
for (let i = 0; i < nodes.length; i++) {
  // console.log(nodes.length);
  if(nodes[i].value == answers[nodes[i].id]){
    // console.log(nodes[i].value, answers[i], nodes[i].value == answers[i]);
    score++
  }
}
// console.log(score);
let ele = document.getElementById("marks");
ele.innerHTML = score + "/5";
}
