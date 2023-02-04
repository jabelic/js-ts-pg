
export const generator=()=>{

    function* gfn(from, to){ while(from <= to) yield from++; }
    var g = gfn(1, 20);
    
    
    function* gfn2(){
        var a = yield "first";
        var b = yield "second";
        yield a + b;
    }
    
    var g2 = gfn2();

    /**
     * {
        next: [Function (anonymous)],
        throw: [Function (anonymous)],
        return: [Function (anonymous)],
        [Symbol(Symbol.iterator)]: [Function (anonymous)]
        }
     */
    console.log(g)


    console.log( g2.next() ); // { value: "first", done: false }
    console.log( g2.next(3) ); // { value: "second", done: false }
    // yield "first" の部分が 3 に置き換えられる : a = 3
    console.log( g2.next(5) ); // { value: 8, done: false }
    // yield "second" の部分が 5 に置き換えられる : b = 5
    console.log( g2.next() ); // { value: undefined, done: true }


    function* gfn3(){
        yield* [1, 3, 5];
    }
    var g3 = gfn3();

    console.log( g3.next() ); // { value: 1, done: false }
    console.log( g3.next() ); // { value: 3, done: false }
    console.log( g3.next() ); // { value: 5, done: false }
    console.log( g3.next() ); // { value: undefined, done: true }

    /** ジェネレータを使えば、処理を止めることができるため、以下のようにもできる */
    // function* gfn4(){
    //     alert("こんにちは！"); yield;
    //     alert("良い天気ですね。"); yield;
    //     alert("さようなら！");
    // }
    // var g4 = gfn4();
    // document.onclick = function(){ g4.next(); }; // ページをクリックするたびに g.next(); を実行する
}
