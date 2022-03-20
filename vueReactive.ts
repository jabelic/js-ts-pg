interface RefOption<T> {
  get(): T;
  set?(x: T): void;
}
declare const _refBrand: unique symbol;
interface Ref<T = any> {
  readonly [_refBrand]: true;
  value: T;
}
// function ref<T extends object>(raw: T): T extends Ref ? T : Ref<T>;
export const compositionApi = () => {
  class Ref {
    private _val: any;
    constructor(private val: any) {
      this._val = this.val;
    }
    get value(): any {
      return this._val;
    }
    set value(val: any) {
      this._val = val;
    }
  }
  function ref<T>(value: T | any) {
    return new Ref(value);
  }

  return { ref };
};

export const reactive = () => {
  const { ref } = compositionApi();
  const name = ref<string>("initial");
  console.debug(name.value);
  name.value = "値変更";
  console.debug(name.value);
};
