const ERRORS = new Map<number | string, string>([
  [0, 'An error occurred.'],
  [1, 'Unsupported hex format. Make sure you include the leading "#" symbol.'],
  [2, 'Unable to convert colour string to digits.']
]);

function format(...args: any[]): string {
  let a = args[0];
  const b = [];
  let c: number;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach((d) => {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

export default class PaletteError extends Error {
  constructor(code: string | number, ...args: any[]) {
    const error = ERRORS.get(code);
    super(format(error, ...args));
  }
}
