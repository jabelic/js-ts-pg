export const _this = () => {
  console.debug("===== bind call apply =====");
  const numbers = [5, 6, 2, 3, 7];
  const max = Math.max.apply(null, numbers);
  console.log(max);
  // expected output: 7
  const min = Math.min.apply(null, numbers);
  console.log(min);
  // expected output: 2

  function Product(name, price) {
    this.name = name;
    this.price = price;
    console.log(this);
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
  }
  console.log(new Food("cheese", 5).name);
  // expected output: "cheese"

  /**
   *  bind, call, apply
   * arrow functionはthisを持たないので動作しない
   * // bindしてcall/applyした場合, bindの方のthisが優先される
     // func.call([thisArg[, arg1, arg2, ...argN]])
     // func.apply(thisArg, [ argsArray])
   */

  const main = (arg: any) => {
    return arg;
  };
  console.debug(main.call(this, "hoge"));
  console.debug(main.apply(this, ["hoge"]));

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
