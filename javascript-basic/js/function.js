//朝の挨拶を出力する関数を定義
const sayGoodMorning = () => {
  console.log('おはようございます。');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

//夜の挨拶を出力する関数を定義
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れ様でした。');
}

//朝の挨拶を出力する関数を呼び出す
sayGoodMorning();

//夜の挨拶を出力する関数を呼び出す
sayGoodEvening();

//与えられた引数priceに送料を加算し、その値を出力する関数を作る。
const calculateTotal = (price) => {
  console.log(price + 500 + '円');
}

//関数を呼び出し、引数として購入金額を渡す。
calculateTotal(1200);

//与えられた引数priceと引数shippingfeeを加算し、その値を出力する関数を定義する。
const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}

//関数を呼び出し、（）の中に引数として購入金額と送料を渡す
addTwoArguments(1200, 500);

//与えられた引数numを2倍にしてその値を戻り値として返す関数を作る
const double = (num) => {
  return num * 2;
}

console.log(double(30));


//関数の中で定数を宣言し、関数のなかで定数を使う
const userVariable = () => {
  const userName = '侍太郎'
  console.log(userName);
}

//関数を呼び出す
userVariable();


//関数のなかで宣言した定数を関数の外で使う
console.log(userName);