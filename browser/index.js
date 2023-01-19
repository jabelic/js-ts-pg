
// https://ja.javascript.info/blob
const array = ['<q id="a"><span id="b">hey!</span></q>']; // 単一の文字列からなる配列
const blob = new Blob(array, { type: "text/html" }); // blob: (data, filetype)
console.log(blob)
let link = document.createElement('a');
link.download = 'hello.html';
link.href = URL.createObjectURL(blob);
link.click();
URL.revokeObjectURL(link.href);
