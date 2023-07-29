import { CountryShort } from "@/types/country"

export const mockCountryResp = [
  {
    flags: {
      png: "https://flagcdn.com/w320/ve.png",
      svg: "https://flagcdn.com/ve.svg",
      alt: "The flag of Venezuela is composed of three equal horizontal bands of yellow, blue and red. At the center of the blue band are eight five-pointed white stars arranged in a horizontal arc.",
    },
    name: {
      common: "Venezuela",
      official: "Bolivarian Republic of Venezuela",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela",
        },
      },
    },
    tld: [".ve"],
    currencies: {
      VES: {
        name: "Venezuelan bolívar soberano",
        symbol: "Bs.S.",
      },
    },
    capital: ["Caracas"],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },
    borders: ["BRA", "COL", "GUY"],
    population: 28435943,
  },
]

export const peru = {
  flags: {
    png: "https://flagcdn.com/w320/pe.png",
    svg: "https://flagcdn.com/pe.svg",
    alt: "The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band.",
  },
  name: {
    common: "Peru",
    official: "Republic of Peru",
    nativeName: {
      aym: {
        official: "Piruw Suyu",
        common: "Piruw",
      },
      que: {
        official: "Piruw Ripuwlika",
        common: "Piruw",
      },
      spa: {
        official: "República del Perú",
        common: "Perú",
      },
    },
  },
  capital: ["Lima"],
  region: "Americas",
  population: 32971846,
}

export const samoa = {
  flags: {
    png: "https://flagcdn.com/w320/as.png",
    svg: "https://flagcdn.com/as.svg",
    alt: "",
  },
  name: {
    common: "American Samoa",
    official: "American Samoa",
    nativeName: {
      eng: {
        official: "American Samoa",
        common: "American Samoa",
      },
      smo: {
        official: "Sāmoa Amelika",
        common: "Sāmoa Amelika",
      },
    },
  },
  capital: ["Pago Pago"],
  region: "Oceania",
  population: 55197,
}

export const tonga = {
  flags: {
    png: "https://flagcdn.com/w320/to.png",
    svg: "https://flagcdn.com/to.svg",
    alt: "The flag of Tonga has a red field. A white rectangle bearing a red Greek cross is superimposed in the canton.",
  },
  name: {
    common: "Tonga",
    official: "Kingdom of Tonga",
    nativeName: {
      eng: {
        official: "Kingdom of Tonga",
        common: "Tonga",
      },
      ton: {
        official: "Kingdom of Tonga",
        common: "Tonga",
      },
    },
  },
  capital: ["Nuku'alofa"],
  region: "Oceania",
  population: 105697,
}

export const mockCountriesResp: CountryShort[] = [peru, samoa, tonga]
