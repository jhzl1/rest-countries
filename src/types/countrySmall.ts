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
  [name: string]: NativeNameDetail
}

export interface NativeNameDetail {
  official: string
  common: string
}

export interface CountryFull {
  flags: Flags
  name: Name
  tld: string[]
  currencies: Currencies
  capital: string[]
  region: string
  subregion: string
  languages: Languages
  borders?: string[]
  population: number
}

export interface Currencies {
  [currencyName: string]: Currency
}

export interface Currency {
  name: string
  symbol: string
}

export interface Languages {
  [language: string]: string
}

export interface SPA {
  official: string
  common: string
}
