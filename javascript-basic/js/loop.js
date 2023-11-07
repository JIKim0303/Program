//変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

//変数numの最初の値を出力する
console.log('最初の値は' + num + 'です');

//変数numの値が0以外である場合、変数numの値を出力し続ける
while (num !== 0) {
  //変数numに0～4までのランダムな整数を再代入する
  num=Math.floor(Math.random() *5);  //ランダムに出力し続ける必要があるため、console.log(num)ではなく、Math.floor(Math.random() *5)とする。

  //次の条件式で比較される、変数numの現在の値を出力する。
  console.log('現在の値は' + num + "です");  /*もし上記のnum=Math.floor(Math.random() *5); のコードを抜いてしまたら、ランダムに選択した数値がただ表示されるだけのプログラムになってしまう。
  ここではwhile文を使用してこの条件のときは（0でないときは）これ、という指示をしたいため、もう一度num=Math.floor(Math.random() *5);を指定する必要がある。*/
}

//1～10までの数値を順番に出力する。
for (let i = 1; i <= 10; i++) {
  console.log(i);
}