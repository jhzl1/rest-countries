"use client"

import CountryCard from "@/components/CountryCard"
import { CountrySmall } from "@/types/countrySmall"

interface Props {
  countries: CountrySmall[]
}

export const CountryList = ({ countries }: Props) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-14">
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
