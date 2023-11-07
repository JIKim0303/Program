
    const btn = document.getElementById('btn');
    const count = document.getElementById('count');    //1
    const msgbox = document.getElementById('msgbox');
//   const sbtn = document.getElementById('sbtn');      //2 
    let msg = '';
    let timeLeft = 0;                             //残り時間

    // let startTime;                                   //STARTボタンを押したときの時刻(宣言)
    // startTime = 0;
    let time = '';
    time = count.textContent;

    btn.addEventListener('click', () => { 
        const timerId = setInterval(() => {
            time--;
            count.textContent = time;
            if(time === timeLeft) {
                clearInterval(timerId);
                msg = '終了！';
                msgbox.textContent = msg;
            }
        }, 1000)
    })

    // btn.addEventListener('click', () => {
    //     setInterval(() => {
    //         time--;
    //         count.textContent = time;
    //         if(time === timeLeft) {
    //             clearInterval(count);
    //             msg = '終了！';
    //             msgbox.textContent = msg;
    //         }
    //     }, 1000);
    // });



      //timerIdをsetTimeoutの返り値として取得 次の処理を指定したミリ秒後に実行(1度だけ)

      // const elapsedTime = Date.now() - startTime;     経過時間 = 現在時刻 - スタートした時間
      // timeLeft = timeToCountDown - elapsedTime;       残り時間 = カウントダウン時間 - 経過時間
        // timeLeft = timeToCountDown - (Date.now() - startTime);  

      //elapsedTimeは、1度しか使わないので直接代入した↑

//       if(timeLeft < 0){              //残り時間が0より小さくなったらclearTimeoutを呼ぶ(タイマー停止)
//         clearTimeout(timerId);
//         timeLeft = 0;                //timeLeftを0にして、updateTimerで更新する
//         updateTimer(timeLeft);
//         return;                      //clearTimeout()したら次のcountDown()を呼び出したくないためreturnする
//       }

//       updateTimer(timeLeft);                                  // 呼び出し(渡すミリ秒はtimerLeft)
//       countDown();                                     //countDownを再帰的に呼び出したいため、ここで呼ぶ。
//     }, 10);
//   }

//     sbtn.addEventListener('click', function() {      //STARTボタンがクリックされたらタイマーON
//     startTime = Date.now();                          // 押したときの時刻を取得
//     countDown();                                     /* カウントダウン機能は setTimeoutを使い再帰的に実行させるため countDown() という名前の別関数にする。*/
//   });


  
//   function setQuiz() {
//     isAnswered = false;

//     question.textContent = quizSet[currentNum].q;

//     while (choices.firstChild) {
//       choices.removeChild(choices.firstChild);
//     }

//     const shuffledChoices = shuffle([...quizSet[currentNum].c]);
//     shuffledChoices.forEach(choice => {
//       const li = document.createElement('li');
//       li.textContent = choice;
//       li.addEventListener('click', () => {
//         checkAnswer(li);
//       });
//       choices.appendChild(li);
//     });

//     if (currentNum === quizSet.length - 1) {
//       btn.textContent = 'Show Score';
//     }

//   }

//   setQuiz();

//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('disabled')) {
//       return;
//     }
//     btn.classList.add('disabled');

//     if (currentNum === quizSet.length - 1) {
//       scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
//       result.classList.remove('hidden');
//     } else {
//       currentNum++;
//       setQuiz();
//     }
//   });
// }
