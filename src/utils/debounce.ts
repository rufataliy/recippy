type Debounce = (fn: Function, delay: number) => Function;

export const debounce: Debounce = function (fn, delay) {
  let inDebounce: NodeJS.Timeout;
  return function (this: typeof debounce) {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn.apply(context, args), delay);
  };
};
