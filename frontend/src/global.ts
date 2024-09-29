import { PaletteColor } from "@mui/material";

export {};
declare global {
  interface String {
    isEmpty: boolean;
    isNotEmpty: boolean;
    capitalize(): string;
    capitalizeFirstLetter(): string;
  }
}

Object.defineProperty(String.prototype, "isEmpty", {
  get() {
    return this.trim().length === 0;
  },
});
Object.defineProperty(String.prototype, "isNotEmpty", {
  get() {
    return this.trim().length > 0;
  },
});
String.prototype.capitalize = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.capitalizeFirstLetter = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

declare global {
  interface Array<T> {
    isEmpty: boolean;
    isNotEmpty: boolean;
    first: T | undefined;
    last: T | undefined;
    hasOne: boolean;
    hasMany: boolean;
  }
}

Object.defineProperty(Array.prototype, "isEmpty", {
  get() {
    return this.length === 0;
  },
});
Object.defineProperty(Array.prototype, "isNotEmpty", {
  get() {
    return this.length > 0;
  },
});
Object.defineProperty(Array.prototype, "first", {
  get() {
    return this.length > 0 ? this[0] : undefined;
  },
});
Object.defineProperty(Array.prototype, "last", {
  get() {
    return this.length > 0 ? this[this.length - 1] : undefined;
  },
});
Object.defineProperty(Array.prototype, "hasOne", {
  get() {
    return this.length === 1;
  },
});
Object.defineProperty(Array.prototype, "hasMany", {
  get() {
    return this.length > 1;
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    ms: true;
  }

  interface BreakpointValues {
    ms: number;
  }

  interface Palette extends PaletteOptions {}
  interface PaletteOptions {
    gradient: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
    };
    details: PaletteColor;
    tertiary: PaletteColor;
    green: PaletteColor;
    orange: PaletteColor;
    blue: PaletteColor;
  }
}
