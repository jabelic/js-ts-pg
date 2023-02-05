// https://qiita.com/kura07/items/cf168a7ea20e8c2554c6
export const iter = ()=> {
    // // イテレータ：nextメソッドを持ち、それがイテレータリザルトを返すこと
    // const iterator = {
    //     next : function(){
    //         var iteratorResult = { value: 42, done: false }; // イテレータリザルト
    //         // value: 値, done: 値を取り終えたかどうか
    //         return iteratorResult;
    //     }
    // }

    // // イテラブル：[Symbol.iterator]() メソッドを実行すると イテレータ を返すこと
    // const obj:any = {}
    // obj[Symbol.iterator] = function(){
    //     return iterator
    // }

    let obj:any = {}; // イテラブルなオブジェクト
    obj[Symbol.iterator] = function(){
        let iterator:any = {}; // イテレータ
        var count = 1;
        iterator.next = function(){
            const iteratorResult = (count <= 10)
                ? { value: count++,   done: false }
                : { value: undefined, done: true };
            return iteratorResult; // イテレータリザルト
        };
        return iterator;
    };
    // こんなことをしなくても、配列、文字列を使えばそれもイテレータとなる

    var iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
    var iteratorResult;
    while(true){
        iteratorResult = iterator.next(); // 順番に値を取りだす
        if(iteratorResult.done) break; // 取り出し終えたなら、break
        console.log(iteratorResult.value); // 値をコンソールに出力
        /** 1 2 3 4 5 6 7 8 9 10 */
    }

    for(var v of obj) console.log(v);
    /** 1 2 3 4 5 6 7 8 9 10 */

    var obj2:any = ["A", "B", "C"]; // イテラブルなオブジェクト
    var iterator2 = obj2[Symbol.iterator](); // イテレータを取得する
    for(var v of iterator2) console.log(v); // for-of にイテレータを渡す
    // [Symbol.iterator]() は自分自身を返す


    /** 
     * イテレータの利用法
     * - 配列
     * - 分割代入
     * - 引数渡し
     * Map, Set, WeakMap, WeakSet
     */
}