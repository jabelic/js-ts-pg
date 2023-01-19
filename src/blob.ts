const Blob = require('node-blob');
export const useBlob = () => {
    const array = ['<q id="a"><span id="b">hey!</span></q>']; // 単一の文字列からなる配列
    const blob = new Blob(array, { type: "text/html" }); // blob: (data, filetype)
    console.log(blob)
}