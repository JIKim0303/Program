console.log('処理1');
console.log('処理2');
console.log('処理3');

//2秒の（2000ミリ秒）待ち時間を設定し、非同期処理を作成する
setTimeout ( () => {
    console.log('処理4（非同期処理）');
}, 2000);

//同期処理を実行する
console.log('処理5');
console.log('処理6');

// const pinkScreen = document.getElementsByClassName('pink-screen');
// window.addEventListener('scroll', () => {
//   const scrollValue1 = document.scrollingElement.scrollTop;
//   if (scrollValue1 >= 200) {
//     //背景色を変えたかったができなかった。
//       // pinkScreen.style.background-color = white;
//   }
//   else {
//     // pinkScreen.style.background-color = 'none';
//   }
//   });

const backHome = document.getElementById('backhome');
setTimeout ( () => {
    backHome.style.display = 'inline';
}, 4000);