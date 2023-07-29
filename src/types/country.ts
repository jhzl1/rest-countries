export type CountryShort = Pick<Country, "name" | "capital" | "region" | "population" | "flags">

export type Flags = {
  png: string
  svg: string
  alt: string
}

export type Name = {
  common: string
  official: string
  nativeName: NativeName
}

export type NativeName = {
  [name: string]: NativeNameDetail
}

export interface NativeNameDetail {
  official: string
  common: string
}

export type Country = {
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

export type Currencies = {
  [currencyName: string]: Currency
}

export type Currency = {
  name: string
  symbol: string
}

export type Languages = {
  [language: string]: string
}
