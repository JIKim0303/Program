const total = (shippingFee) => {
   console.log(shippingFee + 1000);
}

total(500);

const total2 = (price, shippingFee) => {
   console.log(price + shippingFee);
}

total2(600, 500);

const minus = (num) => {
    return num - 1;
}

console.log(minus(500));   /*上の例と一番最後の例は両方とも計算結果をコンソールに出力する方法になっている。戻り値としてreturnを記述して計算させる方法か、console.logで計算させて後で引数を渡す方法*/