function multiply(num1: string, num2: string): string {
  return num2.split().reduce((previousValue,currentValue)=>{
    return plus(previousValue, currentValue)
  },"0")
}

function plus(first: string, ...args: string[]): string {
  if (args.length >= 2) {
    // @ts-ignore
    return plus(first, plus(...args));
  }
  if (arguments.length === 1) {
    return args[0];
  }
  let a = first;
  let b = args[0];
  let up = 0;
  let res = '';
  let temp: number;
  while (a.length && b.length) {
    temp = toInt(a[a.length - 1]) + toInt(b[b.length - 1]) + up;
    up = 0;
    if (temp >= 10) {
      up = 1;
      temp = temp % 10;
    }
    res = temp + res;
    a = a.substring(0, a.length - 1);
    b = b.substring(0, b.length - 1);
  }
  let other = a.length ? a : b;
  while (other) {
    let temp = toInt(other[other.length - 1]) + up;
    up = 0;
    if (temp >= 10) {
      up = 1;
      temp = temp % 10;
    }
    res = temp + res;
    other = other.substring(0, other.length - 1);
  }
  if (up) {
    res = up + res;
  }
  return res;
}

function toInt(s: string) {
  return s.charCodeAt(0) - '0'.charCodeAt(0);
}

// console.log(plus('123', '999'));
console.log(plus('999', '9999999', '1'));
console.log(plus( '9999999', '1'));
