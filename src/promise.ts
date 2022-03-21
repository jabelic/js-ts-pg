export const promise = async () => {
  const iter = async () => {
    for (let it of [1, 2, 3, 4, 5]) {
      //   await _sleep(it);
      _sleep(it);
      console.debug("待ち：", it);
    }
  };
  const _sleep = (waitSeconds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(0);
      }, waitSeconds * 1000);
    });
  };
  await iter();
};
