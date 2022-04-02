// https://zenn.dev/miruoon_892/articles/365675fa5343ed
export const useDecorator = () => {
  function factoryMethod(value: string) {
    // Decoratorによって呼び出される関数
    return function (target) {
      // `target`と`value`使って処理の内容を定義
    };
  }
};
