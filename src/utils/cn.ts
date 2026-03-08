type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: unknown };

export const cn = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg);
      if (inner) classes.push(inner);
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) classes.push(key);
      }
    }
  }

  return classes.join(' ');
};
