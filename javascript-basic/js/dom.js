// //head要素を取得し、中身を出力する
// console.log(document.head);
// //body要素を取得し、中身を出力する
// console.log(document.body);

// // windowオブジェクトの中身を出力する。
// console.log(window);

// console.log(document.getElementById('first-list'));

// //HTML要素をclass名で取得し、中身を出力する。
// console.log(document.getElementsByClassName('heading'));

// //複数のHTML要素を取得し、定数に代入する。
// const headings = document.getElementsByClassName('heading');

// //複数のHTML要素を一つずつ取得し、中身を出力する。
// for (let i = 0; i<headings.length; i++) {
//   console.log(headings[i]);
// }

// //HTML要素をCSSセレクタによって取得し、中身を出力する。（最初の一つ）
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#second-heading'));
// console.log(document.querySelector('.list'));

// //HTML要素をCSSセレクタで取得し、中身を出力する。（すべて）
// console.log(document.querySelectorAll('.heading'));
// console.log(document.querySelectorAll('li'));

// //要素一つ一つを返すようなコード
// const cssHeadings = document.querySelectorAll('.heading');
// for (let i = 0; i < cssHeadings.length; i++) {
//   console.log(cssHeadings[i]);
// }

// //新しくli要素を作成し、定数に代入する。
// const li = document.createElement('li');

// //新しく作成したHTML要素にテキストを追加する。
// // li.textContent = 'JavaScriptで新しく作成したリスト3';
// li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';

// //上記でHTML要素を作成し、それをdocumentオブジェクトに塚する。ul要素の末尾に子要素としてli要素を追加する。
// document.querySelector('ul').appendChild('li');

// 上記はHTML要素で複数存在する場合に、一つ一つにJSを効かせた。
// これをセレクタに対してやる。
// Class名→.heading
const hdg = document.querySelectorAll('.heading');
for (let i = 0; i < hdg.length; i++) {
      console.log('見出し'+hdg[i]);   //ここに'見出し'という文字列と+で[i]を指示すると、object HTMLHeadingElementという表示しかされない。
      }
// headingの全要素を選択して、クリックしたらコンソールに出力する、という指示を書いていたが、
// hdg.addEventListener('click', () => {});で書く関数を書いても、見出しにクリックするa要素がないため、ワークしない。

const childList = document.createElement('li');

childList.textContent='JavaScriptで新しく作成したリストたち';
document.querySelector('ul').appendChild(childList);



//webの神様のyoutubeで、getElementById('xx')で、たった一つのボタンにだけtoggleメソッドを効かせたが、複数あるクラスに対して
//toggleをそれぞれ効かせたい。
// const btsstyle = document.getElementsByClassName('bts');
// for(let i = 0; i < btsstyle.length; i++) {
//       btsstyle[i].addEventListener('click', () => {  //ここの関数宣言をfunctionではなく => にするとワークしなかった。
//         btsstyle[i].classList.toggle('clicked');
//       });
//     }

//getElementsByClassNameでも、querySelectorAllでもワークする。ただquerySelectorAllにする場合は('.bts')というようにドットをつけること！
const btsstyle = document.querySelectorAll('.bts'); 
for(let i = 0; i < btsstyle.length; i++) {
      btsstyle[i].addEventListener('click', function () {
        this.classList.toggle('clicked');
      });
    }
    //↑このコードでも一つ上のコードでもワークする。

const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => {
      const kidBtn = document.createElement('button');
      addBtn.appendChild(kidBtn);
    });
