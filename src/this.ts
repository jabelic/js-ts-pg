export const _this = () => {
  console.debug("===== bind call apply =====");
  const numbers = [5, 6, 2, 3, 7];

  /**
   * apply
   * - 第1引数はthisのスコープ, 第2引数には関数に渡す引数を「配列」で指定する
   */
  const max = Math.max.apply(null, numbers);
  console.log(max); // expected : 7
  const min = Math.min.apply(null, numbers);
  console.log(min); // expected : 2


  function Product(name, price) {
    this.name = name;
    this.price = price;
    console.log(this); // expected : Food { name: 'cheese', price: 5 }
  }

  function Food(name, price) {
    /** 
     * call
     * - 第1引数はthisのスコープ, 第2引数には関数に渡す引数を「可変長引数」で指定できる
     */
    Product.call(this, name, price);
    this.category = "food";
  }
  console.log(new Food("cheese", 5).name); // expected : "cheese"

  /**
   * # bind, call, apply
   * - arrow functionはthisを持たないので動作しない
   * - __bindしてcall/applyした場合, bindの方のthisが優先される__
   * - func.call([thisArg[, arg1, arg2, ...argN]])
   * - func.apply(thisArg, [ argsArray])
   */

  const main = (arg: any) => {
    return arg;
  };
  console.debug(main.call(this, "hoge")); // hoge
  console.debug(main.apply(this, ["hoge"])); // hoge

  const obj = {
    prop1: 100,
    func: function () {
      console.log(this);
    },
    arw: () => {
      console.log(this);
    },
  };
  const exe = obj.func;
  exe.bind(obj).call(); // { prop1: 100, func: [Function: func], arw: [Function: arw] }
  obj.arw.call(obj); // undefined
};
