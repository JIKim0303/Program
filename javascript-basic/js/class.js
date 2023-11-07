//クラス名を定義する。
class Product {   //Productという名前のクラスを新規作成した。
 //インスタンス化すると同時に処理を実行する。（初期化）
  constructor(name, price, category) {
  //↑インスタンス（オブジェクトにプロパティを持たせる）
    this.name = name;
    this.price = price;
    this.category = category;
  }

describe() {      //それぞの商品に説明文を足すためのメソッド
  console.log('この商品は'+this.name+'です。');  //説明文として「この商品は（各商品名）です。」と表示されるように設定した。
}
}

//クラスを元にオブジェクトを作った。（＝インスタンス化する）
//クラスを元にオブジェクトを作り（＝インスタンス）引数を渡した。
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');


//インスタンス（オブジェクト）の値を出力する。
console.log(shampoo);
console.log(coffee);

//メソッドを呼び出す（実行する）
shampoo.describe();    //「この商品はシャンプーです」という説明文が出るように設定した。

//通常のオブジェクトにメソッドを定義する。
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いいたします！');
  }
}

//メソッドを呼び出す（実行する）
user.greet();