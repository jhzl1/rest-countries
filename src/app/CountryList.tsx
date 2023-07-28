"use client"

import CountryCard from "@/components/CountryCard"
import { CountrySmall } from "@/types/countrySmall"

interface Props {
  countries: CountrySmall[]
}

export const CountryList = ({ countries }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-20">
      {countries.map(({ name, capital, flags, ...rest }, i) => (
        <CountryCard
          key={name.official}
          capital={capital[0]}
          imageUrl={flags.svg}
          name={name.official}
          {...rest}
        />
      ))}
    </div>
  )
}
