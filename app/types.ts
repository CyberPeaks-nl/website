type Size = [width: number, height: number];

export type Logo = {
  label: string;
  path: string;
  size: Size;
};

export type USP = {
  title: string;
  description: string;
  icon: Logo;
};
