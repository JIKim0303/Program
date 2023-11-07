//output-btnというidをもつHTML要素を取得し、定数に代入する。
const btn = document.getElementById('output-btn');

//HTML要素がクリックされたときにイベント処理を実行する。
btn.addEventListener('click', () => {
      console.log('クリックされました！');
});

//以下が正解コード↓
const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');
addBtn.addEventListener('click', () => {
const childList = document.createElement('li');
childList.textContent = 'これはリスト要素です';
parentList.appendChild(childList);
});

//上記のコードでは、リスト要素に番号が付かずにリスト追加されたが、これに数字をつけて作成したい。
// const addBtn = document.getElementById('add-btn');
// const parentList = document.getElementById('parent-list');
//    for (let i=0; i<=10; i++) {
//    addBtn.addEventListener('click', () => {
//       const childList = document.createElement('li');
//       childList.innerHTML= '<a href="#">ついかするリンク'+[i];
//       parentList.appendChild(childList);
//    });
// }
//addBtnの位置をさきに持ってきたバージョン↓
// const addBtn = document.getElementById('add-btn');
// const parentList = document.getElementById('parent-list');
//    addBtn.addEventListener('click', () => {
//       for (let i=0; i<=10; i++) {
//       const childList = document.createElement('li');
//       childList.innerHTML= '<a href="#">ついかするリンク'+[i];
//       parentList.appendChild(childList);
//    }
// });
//定数宣言しないバージョン→ワークしなかった。
// document.getElementById('add-btn').addEventListener('click',() => {
//    document.createElement('li');
//    document.createElement('li').textContent='これはリスト要素です';
//    document.querySelector('ul').appendChild('li');
// });
//これにli要素でリストを追加するが、[i]で番号もつけたい。↓
// const addBtn = document.getElementById('add-btn');
// const parentList = document.getElementById('parent-list');
// let i=0;
// do {
//    i+=0;
//    addBtn.addEventListener('click', () => {
//    const childList = document.createElement('li');
//    childList.textContent='これはりすと'+[i]+'要素です';
//    parentList.appendChild(childList);
//    }
// );} while (i < 10);

//教材の子要素を追加するコードの、addEventListenerではなくonclickを使ったバージョン↓
// const addBtn = document.getElementById('add-btn');
// const parentList = document.getElementById('parent-list');
// addBtn.onclick = () => {
//    const childList = document.createElement('li');
//    childList.innerHTML = 'これはリスト要素です';
//    parentList.appendChild(childList);
// }

// for (let i = 0; i < addBtn.length; i++) {
//    console.log(childList+[i]);
//    }

;
const addNobtn = document.getElementById('add-nobtn');
const noparentList = document.getElementById('noparent-list');
addNobtn.addEventListener('click', () => {
   const nochildList = document.createElement('li');
   nochildList.innerHTML = 'これはリスト要素';
   noparentList.appendChild(nochildList);
});



const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', () => {
   console.log(document.forms.textForm.textBox.value.length);
})
 // HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
   // テキストボックスに入力された文字列を取得する
const text = document.forms.textForm.textBox.value;

   // 取得した文字列の文字数を出力する
console.log(text.length + '文字');
});
// //以下のコードでもワークした。
// document.getElementById('count-btn').addEventListener('click', () => {
//    console.log(document.forms.textForm.textBox.value.length);
// });


const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click',()=>{
const area = document.forms.areaForm.area.value;
console.log(area);
});
// //以下でもワークするか実験→ワークしなかった。areaのinputに入っているvalueはクリックされて初めて取得されるようにしたいためコンソールに出力されなかったと考えられる。
// const areaBtn = document.getElementById('area-btn');
// const area = document.forms.areaForm.area.value;
// areaBtn.addEventListener('click', () => {
//    console.log(area);
// });

const linkageclass = document.getElementsByClassName('linkage');
for (let i=1; i<linkageclass.length; i++) {
   linkageclass[i].addEventListener('click', () => {
      console.log(linkageclass[i]+'をクリックしたよ！');
   });
}

const osBtn = document.getElementById('os-btn');
osBtn.addEventListener('click', () => {
   const items = document.forms.osForm.os;
   for(let i=0; i<items.length;i++){
      if(items[i].checked){
         console.log(items[i].value);
      }
   }
});
// //以下のコードでもワークした（const itemsの定数宣言を関数式外で行った）
// const osBtn = document.getElementById('os-btn');
// const items = document.forms.osForm.os;
// osBtn.addEventListener('click', () => {
//    for(let i=0; i<items.length;i++){
//       if(items[i].checked){
//          console.log(items[i].value);
//       }
//    }
// });
// //以下のコードでもワークした。
// document.getElementById('os-btn').addEventListener('click', () => {
//    const items = document.forms.osForm.os;
//    for(let i=0;i<items.length;i++){
//       if(items[i].checked) {
//          console.log(items[i].value);
//       }
//    }
// });
// //以下がワークするかテスト→ワークした！！→ただ、目的語（document.forms.osForm.os）を一回一回記述するのが面倒。。
// document.getElementById('os-btn').addEventListener('click', () => {
//    for(let i=0; i<document.forms.osForm.os.length; i++){
//       if(document.forms.osForm.os[i].checked){
//          console.log(document.forms.osForm.os[i].value);
//       }
//    }
// });

//引数の確認
// function AreaOfTriangle(width, height) {
//    var area;
//    area = (width * height)/2;
   // console.log(`底辺の長さが『${width}』、高さが『${height}』の三角形の面積は『${area}』です。`);
// }
// AreaOfTriangle(10, 5);

const AreaOfTriangle = (width, height) => {
   var area;
   area = (width * height)/2;
   console.log(`底辺の長さが『${width}』、高さが『${height}』の三角形の面積は『${area}』です。`);
}
AreaOfTriangle(10, 5);