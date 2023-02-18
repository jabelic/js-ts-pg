// https://hakuhin.jp/js/typed_array.html
export const typedArray = ()=>{
        // 配列の個数を指定して、Uint8Array オブジェクトを作成する

    // ArrayBuffer に対応している
    // if(window.ArrayBuffer){

        // 配列の個数を指定して、Uint8Array オブジェクトを作成する
        var ary_u8 = new Uint8Array(128);
        // ビューから、ArrayBuffer オブジェクトを取得する
        var ary_buffer = ary_u8.buffer;
        // 確保した総バイト数
        console.log(ary_buffer.byteLength); // 128 (1 * 128)

    // }
    // 配列の個数を指定して、Float64Array オブジェクトを作成する
    // ArrayBuffer に対応している
    // if(window.ArrayBuffer){

        // 配列の個数を指定して、Float64Array オブジェクトを作成する
        var ary_f64 = new Float64Array(64);
        // ビューから、ArrayBuffer オブジェクトを取得する
        var ary_buffer = ary_f64.buffer;
        // 確保した総バイト数
        console.log(ary_buffer.byteLength); // 512 (8 * 64)
    // }

    // 要素数5（2バイト×5＝10バイト）のUint16Arrayを作成する。
    const arr1 = new Uint16Array(5);
    console.log(arr1); // [0, 0, 0, 0, 0] ※初期値は0
    console.log(arr1[5]); // 範囲外は「undefined」

    // 通常の配列で初期データを指定して作成する。
    const arr2 = new Uint16Array([254, 255, 256, 257, 258]);
    console.log(arr2); // [254, 255, 256, 257, 258]

    // 他の型付き配列で初期データを指定して作成する。
    // 型に収まらない数値が与えられた場合は、下位ビットのみが採用される。
    const arr3 = new Uint8Array(arr2);
    console.log(arr3); // [254, 255, 0, 1, 2]
}
