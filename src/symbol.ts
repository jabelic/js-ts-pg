export const symbol = () => {
    const id1 = Symbol("id") // 引数はシンボル名となる
    let id2 = Symbol("id");
    console.log(id1 == id2); // false

    //alert(id1) //  // TypeError: Cannot convert a Symbol value to a string
    //alert(id1.toString()) // Symbol(id)

    let id = Symbol("id");
    let user = { // 別のコードに属しているオブジェクト
        name: "John",
        [id]: 2
    };
    console.debug( user[id] ); // キーとして symbol を使ってデータにアクセスできます
    // for (let key in user) alert(key); // name, age (no symbols)
    for (let key in user) console.debug(key); // [id]はiterに含まれない
}