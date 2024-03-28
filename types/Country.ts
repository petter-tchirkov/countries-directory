export type Country = {
  flags: Flags;
  name: Name;
  cca3: string;
  population: number;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
};

export type NativeName = {
  official: string;
  common: string;
};
