//back-btnというid名を持つHTML要素を取得して定数に代入する。
const backBtn = document.getElementById('back-btn');
//画面(windowオブジェクト)がスクロールされたときにイベント処理を実行する。
window.addEventListener('scroll', () => {
  //画面のスクロール量をpx数で取得する
  const scrollValue = document.scrollingElement.scrollTop;
  //画面のスクロール量が300px以上であればTOPに戻るボタンのdisplayプロパティをnoneからinlineに変更する
  if(scrollValue >= 300){
      backBtn.style.display = 'inline';
      // backBtn.style.opacity = 0.5;
  }
  else{
      backBtn.style.display='none';
  }
});


//以下のコードでも動くか実験→ちゃんとワークした。
// window.addEventListener('scroll', () => {
//   const scrollValue=document.scrollingElement.scrollTop;
//   if(scrollValue >= 300) {
//       document.getElementById('back-btn').style.display ='inline';
//   }
//   else{
//       document.getElementById('back-btn').style.display='none';
//   }
// });
// //以下のコードでも動くかさらにテスト→エラーは起きないが、300px以上スクロールしてもボタンが表示されなかった
// const backBtn = document.getElementById('back-btn');
// const scrollValue = document.scrollingElement.scrollTop;
// window.addEventListener('scroll', () => {
//   if(scrollValue >= 300) {
//     backBtn.style.display='inline';
//   }
//   else{
//     backBtn.style.display='none';
//   }
// });

// //一定時間経過したら背景色が変わるように設定する。→ワークしなかった。
// const redScreen = document.getElementsById('red');
// setTimeout ( () => {
//   redScreen.style.backgroundcolor= '#ee82ee';
// }, 4000);