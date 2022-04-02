/**
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this
 * https://numb86-tech.hatenablog.com/entry/2016/08/27/132310
 *
 */
/**
 * [MDN]
 * let で定義された変数は、自身が定義されたブロックと、そこに含まれるサブブロックがスコープになります。
 * この点において let のふるまいは var にとてもよく似ています。
 * 大きな違いは、var で定義された変数のスコープはそれを含んでいる関数全体になるということです。
 */

export const scopes = () => {
  console.debug("====== const var let ======");
  function varTest() {
    var x = 1;
    {
      var x = 2; // 同じ変数です!
      console.debug(x); // 2
    }
    console.debug(x); // 2
  }
  /** letはブロックスコープを作る */
  // スコープチェーン: スコープがネストしてる状態のこと
  function letTest() {
    let x = 1;
    {
      let x = 2; // 異なる変数
      console.debug(x); // 2
      {
        let x = 3;
        console.debug(x); // 3
      }
    }
    console.debug(x); // 1
  }
  function constTest() {
    const x = 1;
    {
      const x = 2; // 異なる変数
      console.debug(x); // 2
    }
    console.debug(x); // 1
  }
  varTest();
  letTest();
  constTest();
  /**
   * jsはレキシカル(静的)スコープ.
   * レキシカルスコープとはコードを書く場所によって参照できる変数が変わるスコープのこと。
   * 関数が宣言された位置によってスコープが決定される
   */
  console.debug("===== Scope =====");
  function init() {
    var name = "Mozilla"; // name は、init が作成するローカル変数
    function displayName() {
      console.debug("name is: ", name); // Mozilla
    }
    function displayName2() {
      var name = "MMMMMM";
      console.debug("name is re-defined: ", name); // MMMMMM
      displayName();
    }
    displayName2();
  }
  init();

  /**
   * JavaScript の関数はクロージャとなる
   * > クロージャは、関数とその関数が作られた環境という 2 つのものの組み合わせです。
   * 'myFunc'はdisplayName関数のインスタンス(クラスから生成したオブジェクト)への参照である。
   * displayName のインスタンスはレキシカル環境への参照を保持し、そこに name 変数が存在する。
   */
  function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.debug(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();

  console.debug("===== 巻き上げ =====");
  /** 巻き上げ */
  console.log(x); // undefined
  var x = 0;
  /** 
   * same as 
   * var x;
    console.log(x); // undefined
    var x = 0;
   */
  var scope = "This is global. var";

  var func0 = function () {
    console.log(scope); // undefined
    var scope = "This is local. var.";
    console.log(scope);
  };

  func0();
  // undefined
  // This is local.
  let glbl = "This is global. let.";

  var func1 = function () {
    console.log(glbl); // undefined
  };

  var func2 = function () {
    console.log(glbl); // undefined
    var glbl = "This is local. func2";
    console.log(glbl);
  };

  // var func3 = function () {
  //   console.log(glbl); // ReferenceError: scope is not defined
  //   let glbl = "This is local. func3";
  //   console.log(glbl);
  // };

  func1();
  // This is global.

  func2();
  // undefined
  // This is local.

  // func3();
  // ReferenceError: scope is not defined
};

/** browswerなどでは以下のように, varのみthisにbindされる */
// var x = 'global';
// let y = 'global';
// console.debug(this.x); // "global"
// console.debug(this.y); // undefined
