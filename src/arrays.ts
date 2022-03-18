/** TODO: js array method
 * - concat
 * - includes
 * - some
 * - every
 * - find
 * - filter
 */
/**
 * References
 * - https://qiita.com/Nossa/items/4a425e57ec4b7eedb7cb
 */
export const use = () => {
  console.debug("===== array methods =====");
  const books: Book[] = [
    { title: "幼年期の終り", author: "アーサー・C・クラーク" },
    { title: "1984年", author: "ジョージ・オーウェル" },
    { title: "われはロボット", author: "アイザック・アシモフ" },
  ];
  type Book = { title: string; author: string };
  const userList1 = ["user1", "user2", "user3"];
  const userList2 = ["user4", "user5", "user6"];
  const pets = ["cat", "dog", "bat"];
  const incrementNumerics = [1, 2, 3, 4, 5];
  const letters: (string | number)[] = ["a", "b", "c"]; // NOTE: (string | number)としないとnumber型とconcatする時にエラーになる
  const positiveNumerics = [1, 30, 39, 29, 10, 13];

  /** concat */
  const concat = () => {
    console.debug("===== concat =====");
    const allUser = userList1.concat(userList2);
    /** userList1とuserList2が結合されて出てくる */
    console.debug("concat: ", allUser);
    const alphaNumeric: (string | number)[] = letters.concat(1, [2, 3]);
    console.debug("concat multiple types", alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]

    const nestedNum1: (number | number[])[] = [[1]];
    const nestedNum2: (number | number[])[] = [2, [3, 4]];
    console.debug("nest array", nestedNum1.concat(nestedNum2)); //[ [ 1 ], 2, [ 3 ] ]
    // flatになる階層はconcatされる側の階層に依存する
  };

  /** includes */
  const includes = () => {
    console.debug("====== includes =====");
    console.debug("array.includes, expected true: ", pets.includes("cat")); // expected output: true
    console.debug("array.includes, expected false: ", pets.includes("at")); // expected output: false
    console.debug("string.includes: ", "concat".includes("at")); // expected output: true

    /** objectは参照が比較される。 */
    /** 参照が一致するのでtrue */
    const target = books[1];
    const includes = books.includes(target);
    console.debug("includes, same reference: ", includes); // expected output: true

    /** 値は一緒でも参照は違うのでfalse */
    const _target = { title: "1984年", author: "ジョージ・オーウェル" };
    const notIncludes = books.includes(_target);
    console.debug("notIncludes, difference reference: ", notIncludes); // expected output: false
  };

  /**
   * ECMA-262 標準の第5版
   *
   * some() メソッドは、配列の少なくとも一つの要素が、
   * 指定された関数で実装されたテストに合格するかどうかをテストします。
   * これはブール値を返します。
   *
   * someのcallback関数は結果を必ずreturnすること。
   * (elem) => condition  OR (elem) => {return condition} OR function(elem){return condition;}
   *  */
  const some = () => {
    console.debug("====== some =====");
    /** The most simple case. */
    console.debug(
      "someで'even' : ",
      incrementNumerics.some((element) => element % 2 === 0)
    );

    const _target: Book = { title: "1984年", author: "ジョージ・オーウェル" };
    const _some = books.some((item: Book) => {
      return item.author === _target.author && item.title === _target.title;
    });
    console.debug("some: ", _some); // expected output: true

    //** advanced */
    const _some2 = books.some(function (item: Book, index, arr) {
      // 'arr' is books.
      // 'this' is _target
      return item.author === this.author && item.title === this.title;
    }, _target);
    console.debug("this in some: ", _some2);
    //** advanced */
    const _some3 = books.some(function (item: Book, index, arr) {
      // 'arr' is books.
      // 'this' is _target
      return this == item;
    }, _target);
    console.debug("objectの比較は参照が違えばfalse: ", _some3);
  };

  const iterator = () => {
    console.debug("===== [@@iterator]() =====");
    var eArr = incrementNumerics[Symbol.iterator]();
    console.debug(eArr.next().value); // 1
    console.debug(eArr.next().value); // 2
    console.debug(eArr.next().value); // 3
    console.debug(eArr.next().value); // 4
    console.debug(eArr.next().value); // 5
    console.debug(eArr.next().value); // undefined
  };

  const every = () => {
    /** ECMA-262 標準, 第5版
     * 列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。
     * @returns boolean
     */
    console.debug(
      "every: ",
      positiveNumerics.every(
        function (currentValue) {
          return currentValue < this?.maximum;
        },
        {
          maximum: 40,
        }
      )
    ); // expected output: true

    // こっちの方が好き
    const lowerThanThreshold = (currentValue: number, threshold: number) =>
      currentValue < threshold;
    console.debug(
      "every: ",
      positiveNumerics.every((currentValue) =>
        lowerThanThreshold(currentValue, 40)
      )
    ); // expected output: true
  };

  const reduce = () => {
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.debug("reduce: ", sumWithInitial);
  };

  // The compiler option '--downlevelIteration' is needed to copy like that.
  var setIDs = new Set([1, 2, 3, 4, 5, 5, 5, 6]);
  var ListIDs = [...setIDs];
  return { concat, includes, some, iterator, every, reduce };
};
