export interface CountrySmall {
  flags: Flags
  name: Name
  capital: string[]
  region: string
  population: number
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  eng: Eng
  smo: Eng
}

export interface Eng {
  official: string
  common: string
}
