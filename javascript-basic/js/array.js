//配列 の宣言と値の代入を行う
const userNames= ['侍太郎', '侍一郎', '侍二郎', '侍三郎', '侍四郎'];

//配列の値を出力する
console.log(userNames);  //userNamesというように最後にsをつけて複数形にする！

//2番目の要素を更新する
userNames[1] = '侍花子';

//6番目の要素を追加する
userNames[5] = '侍五郎';

//配列の値を出力する
console.log(userNames);

//3番目の要素を表示する
console.log(userNames[2]);  //3番目の要素だから"userNames[3];ではなく、0から数えるためuserNames[2];とする。