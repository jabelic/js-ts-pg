/** currying */
const addAbs = (x: number) => {
  if (x > 0) {
    return function (y: number) {
      return x + y;
    };
  } else {
    return function (y: number) {
      return -1 * x + y;
    };
  }
};
export const currying = () => {
  const add2 = addAbs(2);
  console.debug(add2(2), add2(-2)); // 4, 0
  const addminus = addAbs(-2);
  console.debug(addminus(2), addminus(-2)); // 4, 0
};
