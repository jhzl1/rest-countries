"use client"

import CountryCard from "@/components/CountryCard"
import { CountrySmall } from "@/types/countrySmall"
import { Filters } from "./Filters"
import { useFilters } from "@/hooks"

interface Props {
  countries: CountrySmall[]
}

export const CountryList = ({ countries }: Props) => {
  const {
    handleRegionFilterChange,
    regionFilter,
    filteredCountries,
    countryNameFilter,
    handleCountryFilterNameChange,
  } = useFilters(countries)

  return (
    <>
      <Filters
        countryNameFilter={countryNameFilter}
        onInputFilterChange={handleCountryFilterNameChange}
        onRegionFilterChange={handleRegionFilterChange}
        regionNameFilter={regionFilter}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-14">
        {filteredCountries.length === 0 && (
          <span>No matches found for country name {`"${countryNameFilter}"`} </span>
        )}

        {filteredCountries.map(({ name, capital, flags, ...rest }) => (
          <CountryCard
            key={name.official}
            capital={capital[0]}
            imageUrl={flags.svg}
            name={name.official}
            {...rest}
          />
        ))}
      </div>
    </>
  )
}
