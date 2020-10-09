export const maybe = (x: any, odds: number = 0.4) =>
  Math.random() > 1 - odds ? x : undefined;
