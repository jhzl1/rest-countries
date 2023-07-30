"use client"

import { CountryCard } from "@/components/CountryCard"
import { useFilters } from "@/hooks"
import { InputFilter } from "./InputFilter"
import { Dropdown } from "./Dropdown"
import { CountryShort } from "@/types/country"

interface Props {
  countries: CountryShort[]
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

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
      <div className="flex flex-col md:flex-row space-y-3 justify-between items-center">
        <InputFilter
          placeholder="Search for a country..."
          value={countryNameFilter}
          onChange={handleCountryFilterNameChange}
          className="w-full md:w-72"
        />

        <Dropdown
          options={regions}
          placeholder="Filter by region"
          className="w-full md:w-52"
          onSelectValue={handleRegionFilterChange}
          value={regionFilter}
        />
      </div>

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
