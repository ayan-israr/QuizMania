let validate = false;
let x = document.mcqs.answer;
let i;
let gvnAns = [];
let ques = document.querySelector("#ques");
let tapCard = document.querySelectorAll(".ans-card");
let num = 0;
let score = 0;
const nextSound = new Audio('../sound/next.mp3');

document.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
      event.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey && (event.key === '+' || event.key === '-')) || event.key === 'Escape') {
      event.preventDefault();
  }
});

// window.addEventListener('click', () => {
//   nextSound.play();
// });

function fAns() {
  event.preventDefault();
  for (i = 0; i < x.length; i++) {
    if (x[i].checked) {
      validate = true;
      gvnAns.push(x[i].value);
      num++;
      function percentage(obtainedMarks, totalMarks) {
        if (totalMarks <= 0) {
          return;
        }
        const percentage = (obtainedMarks / totalMarks) * 100;
        return parseFloat(percentage.toFixed(2)); // Rounds to 2 decimal places
      }
      if (crrAns.length == gvnAns.length) {
        ques.innerHTML = `<div class="result">
    <div class="title">
    <h1>Result</h1>
                                </div>
                                <div class="result-main">
                                <div class="result-left">
                                <h3>Total Questions: ${crrAns.length}</h3>
                                <h3>Attempted Questions: ${gvnAns.length}</h3>
                                <h3>Your Score: ${score}</h3>
                                <h3>Percentage: ${percentage(
                                  score,
                                  crrAns.length
                                )}%</h3>
                                </div>
                                <div class="result-right">
                                <div class="wrapper">
                                <div class="circular-bar">
                                <div class="percent">0%</div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div class="result-btn">
                                <div class="r-btn">
                                <button class=""><a href="../html/index.html">Home</a></button>
                                <!-- <button class="reset" title="reset"><i class="bx bx-reset"></i></button> -->
                                </div>
                                <button class="reset">Again</button>
                                </div>
                                </div>`;

        // progress bar
        let CircularBar = document.querySelector(".circular-bar");
        let PercentValue = document.querySelector(".percent");

        let InitialValue = 0;
        let finaleValue = percentage(score, crrAns.length);
        let speed = 19;

        let timer = setInterval(() => {
          InitialValue += 1;

          CircularBar.style.background = `conic-gradient(#4285f4 ${
            (InitialValue / 100) * 360
          }deg, #e8f0f7 0deg)`;
          PercentValue.innerHTML = InitialValue + "%";

          if (InitialValue >= finaleValue) {
            clearInterval(timer);
          }
        }, speed);
      } else {
        ques.innerHTML = `<div class="question">
                            <h2>${nextQues[num - 1].question}</h2>
                        </div>
                        <div class="answer">
                                <div class="mcqs">
                                    <div class="ans-card">
                                        <input class="magnet" type="radio" name="answer" id="" value="1">${
                                          nextQues[num - 1].option1
                                        }
                                    </div>
                                    <div class="ans-card">
                                        <input class="magnet" type="radio" name="answer" id="" value="2">${
                                          nextQues[num - 1].option2
                                        }
                                    </div>
                                    <div class="ans-card">
                                        <input class="magnet" type="radio" name="answer" id="" value="3">${
                                          nextQues[num - 1].option3
                                        }
                                    </div>
                                    <div class="ans-card">
                                        <input class="magnet" type="radio" name="answer" id="" value="4">${
                                          nextQues[num - 1].option4
                                        }
                                    </div>
                                </div>
                                <div class="submit">
                                        <div class="btn">
                                            <button class="end">End</button>
                                            <button class="reset" title="reset"><i class="bx bx-reset"></i></button>
                                        </div>
                                        <input class="magnet" type="submit" value="Next">
                                        </div>
                                        </div>`;
      }
      
      const resetButton = document.querySelector(".reset");
      if (resetButton) {
        resetButton.addEventListener("click", () => {
          location.reload();
        });
      }

      const endButton = document.querySelector(".end");
      if (endButton) {
        endButton.addEventListener("click", () => {
          ques.innerHTML = `<div class="result">
    <div class="title">
    <h1>Result</h1>
                                </div>
                                <div class="result-main">
                                <div class="result-left">
                                <h3>Total Questions: ${crrAns.length}</h3>
                                <h3>Attempted Questions: ${gvnAns.length}</h3>
                                <h3>Your Score: ${score}</h3>
                                <h3>Percentage: ${percentage(
                                  score,
                                  crrAns.length
                                )}%</h3>
                                </div>
                                <div class="result-right">
                                <div class="wrapper">
                                <div class="circular-bar">
                                <div class="percent">0%</div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div class="result-btn">
                                <div class="r-btn">
                                <button class=""><a href="../html/index.html">Home</a></button>
                                <!-- <button class="reset" title="reset"><i class="bx bx-reset"></i></button> -->
                                </div>
                                <button class="reset">Again</button>
                                </div>
                                </div>`;


          // progress bar
          let CircularBar = document.querySelector(".circular-bar");
          let PercentValue = document.querySelector(".percent");

          let InitialValue = 0;
          let finaleValue = percentage(score, crrAns.length);
          let speed = 19;

          let timer = setInterval(() => {
            InitialValue += 1;

            CircularBar.style.background = `conic-gradient(#4285f4 ${
              (InitialValue / 100) * 360
            }deg, #e8f0f7 0deg)`;
            PercentValue.innerHTML = InitialValue + "%";

            if (InitialValue >= finaleValue) {
              clearInterval(timer);
            }
          }, speed);

          const resetButton = document.querySelector(".reset");
          if (resetButton) {
            resetButton.addEventListener("click", () => {
              location.reload();
            });
          }
        });
      }

      // updating score
      if (gvnAns[num - 1] == crrAns[num - 1]) {
        score++;
      }


      // Reattach event listeners
      const newTapCards = document.querySelectorAll(".ans-card");
      newTapCards.forEach((card) => {
        card.addEventListener("click", (e) => {
          const input = e.target.querySelector("input");
          if (input) input.checked = true;
        });
      });
      break;
    }
  }
}


Array.from(tapCard).forEach((card) => {
  card.addEventListener("click", (e) => {
    e.target.querySelector("input").checked = true;
  });
});


Shery.mouseFollower({
  //   skew: true,
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
});

// Shery.makeMagnet(".magnet" /* Element to target.*/, {
//   //Parameters are optional.
//   // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   // duration: 1,
// });
