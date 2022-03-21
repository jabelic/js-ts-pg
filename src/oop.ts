/**
 * - this: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this
 * - new:
 * - Decorator:
 */
export const oop = () => {
  class Example {
    constructor() {
      const proto = Object.getPrototypeOf(this);
      console.debug(Object.getOwnPropertyNames(proto)); // ['constructor', 'first', 'second']
    }
    first() {}
    second() {}
    static third() {}
  }
  const exp = new Example(); // ['constructor', 'first', 'second']

  function f() {
    return this.a;
  }
  var g = f.bind({ a: "azerty" });
  console.debug(g()); // azerty

  var h = g.bind({ a: "yoo" }); // bind は一度しか機能しない
  console.debug(h()); // azerty

  var o = { a: 37, f: f, g: g, h: h };
  console.debug(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
  // console.debug(Example.prototype); // { first: [Function (anonymous)], second: [Function (anonymous)] }
};
