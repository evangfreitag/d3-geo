export var pi = Math.PI;
export var halfPi = pi / 2;
export var tau = pi * 2;

export var degrees = 180 / pi;
export var radians = pi / 180;

export var abs = Math.abs;
export var atan2 = Math.atan2;
export var cos = Math.cos;
export var sin = Math.sin;
export var sqrt = Math.sqrt;

export function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

export function haversin(x) {
  return (x = sin(x / 2)) * x;
}
