//function myAlert() {  //関数名myAlertのあとには必ず()をつける。関数の処理を記述するコードは{}でくくる。
//    alert('こんにちは！');   //{}の中は関数の中身を書くところになる。
//	alert('webの神様です。');  //関数宣言と関数の呼び出しの2通りの命令をするためのコードを書く。
//}
//上記のfunctionから}までの部分が関数宣言に該当する。こうゆう関数が使えるように決めたよ、という宣言だけしている状態。
//一度書いておけばOK。あとは関数呼び出しの命令をいつでもどこでも指定できる。

//myAlert();  //関数を呼び出す命令コード関数を呼び出して実行させることができる。括弧とセミコロンの入力を忘れない。
//myAlert();
//myAlert();

//関数名の後ろにある括弧の中に何か入れる場合

//引数
//function myAlert(greeting) {
//	alert(greeting);
//	alert('Webの神様です!');
//}

//最初の関数の練習との違いとして、今回は関数名の後の括弧の中に値が入っているということと、
//中身の処理でも、alertで表示させるものの一つ目をgreetinと指定している。
//関数名の後に続く()の中にある値のことを「引数」と呼ぶ。
//上のコードではmyAlert(greeting)と、関数の中身のalert(greeting);は連動している。
//myAlert('こんばんは～！');
//myAlert('こんばんは～－－－－－－！！！！！');
// myAlert('おはよ！');
// myAlert('こんにちは！');
// myAlert('こんばんは');

// function myAlert(greeting, channelName) {
// 	alert(greeting);
// 	alert(channelName+'です!');
// }
// //引数を二つ設定し、それぞれの引数を関数の中で使用しているため、この関数を呼び出すときは、二か所の値を好きに変更することができる。
// myAlert('わーい！', 'web神様');
//この場合、greeting, channelNameの順番で値を入れていくため、greeting=おはよ！で、channelName=webの神様となる。

//引数
// function myAlert(greeting = 'ヤッホー！') {
// 	alert(greeting);
// 	alert('Webの神様です!');
// }

//     myAlert('こんちは！');
// //引数を設定しているのに、引数の値を入力しないで実行すると引数のデフォルト値が出るようになっている。

//return=戻り値を設定するための合言葉
// function myCalc(a,b) {
// 	return a+b;
// }

// alert(myCalc(1,2));

// function myCalc(a,b) {  //この時点での引数はaとbが該当する。
// 	console.log(a+b);
// 	return a+b;
// }

// alert(myCalc(1,2));

// //無名関数
// const myAlert = function () {
// 	alert('こんちは！');
// 	alert('これは無名関数の例です。');
// }
//     myAlert(); //これは実行（関数呼び出し）ができる。
// 	myAlert;  //これは実行（関数呼び出し）ができない。

//関数宣言ver
// function myCalc(a,b) {
// 	return a+b;
// }
// alert(myCalc(1,2));

// //無名関数を使った書き方
// const myCalc = function(a,b) {
// 	return a+b;
// }
// alert(myCalc(1,2));

//アロー関数
// const myAlert = () => {
// 	alert('こんちは！');
// 	alert('これはアロー関数の例です。');
// }
// myAlert();

// const myBlog = {
// 	title: 'JavaScriptがんばるぞブログ',
// 	author: 'webの神太郎'
// }
// console.table(myBlog);
// console.log(myBlog.title);

// const myBlog = {
// 	title: 'JavaScriptがんばるぞブログ',
// 	author: 'webの神太郎',
// 	addPost: () => {
// 		console.log('記事を投稿したよ！');
// 	},
// 	deletePost: () => {
// 		console.log('記事を削除したよ！');
// 	}
// }
// console.log(myBlog.title);
// myBlog.addPost();

// console.log();
// alert();
// window.alert();

// DOM操作
// document.getElementById();
// document.getElementsByClassName();

// const btn01 = document.getElementById('btn01');
// console.log(btn01);

// const btn = document.getElementsByClassName('btn');
// console.log(btn);

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click	', function() {
// 			console.log(this);
// });


// //書き換えたバージョン
// document.getElementById('btn01').addEventListener('click', function() {
// 	console.log(this);
// });


// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function() {
// 			this.classList.add('clicked');
// });

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function () {
// 		this.classList.toggle('clicked');
// })

// const btn01 = document.getElementById('btn01');
// btn01.addEventListener('click', function() {
// 	this.classList.toggle('clicked');
// });

// const btn = document.getElementsByClassName('btn');
// btn.addEventListener('click', function() {
// 	this.classList.toggle('clicked');
// });

// const btn = document.getElementsByClassName('btn');
// for(let i=0; i < btn.length; i++) {
// 	btn[i].addEventListener('click', function() {
// 		this.classList.toggle('clicked');
// 	});
// }

// const btn = document.getElementsByClassName('btn')

// 下記のコードはワークしない。
// const btn[0] = document.getElementsByClassName(btn);   //複数指定したクラス名ではaddeventlistenerがワークしないということだったため、btn[0]というように複数のクラスの中でも特定させた。
// btn[0].addEventListener('click', function() {　　　　　　//btn[0]とすれば特定できるかと思ったが、ワークしなかった。複数あるクラスに対しての指示はfor文を使うしかなさそう…。
// 	this.classList.add('linked');
// });

// const btn2 = document.getElementsByClassName ('btn2');
// for(let i=0; i < btn2.length; i++); {
// 	btn2[i].addEventListener('click', function() {
// 		this.classList.toggle('clicked');
// 	});
// }

const btn = document.getElementsByClassName('btn');
for(let i=0; i < btn.length; i++) {
	btn[i].addEventListener('click', function() {
		this.classList.toggle('clicked');
	});
}
//↑のこーどでワークしたけど、一つのボタンを押すとほかのボタンを連動して反応してしまう…。

// const link = document.getElementsByClassName ('link');
// for(let i=0; i<link.length; i++);
// 	console.log('今は'+link[i]+'番目です。');