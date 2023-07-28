import { CountrySmall } from "@/types/countrySmall"
import { useEffect, useState } from "react"

export const useFilters = (countries: CountrySmall[]) => {
  const [countryNameFilter, setCountryNameFilter] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const [regionFilter, setRegionFilter] = useState("")

  useEffect(() => {
    const filteredCountriesByName = countries.filter((country) =>
      country.name.official.toLowerCase().includes(countryNameFilter.trim().toLowerCase()),
    )

    const filteredCountriesByRegion = countries.filter(
      (country) => regionFilter === "" || country.region === regionFilter,
    )

    const filteredCountriesCombined = filteredCountriesByName.filter((country) =>
      filteredCountriesByRegion.includes(country),
    )

    setFilteredCountries(filteredCountriesCombined)
  }, [countries, countryNameFilter, regionFilter])

  const handleCountryFilterNameChange = (countryName: string) => {
    setCountryNameFilter(countryName)
  }

  const handleRegionFilterChange = (region: string) => {
    setRegionFilter(region)
  }

  return {
    handleCountryFilterNameChange,
    filteredCountries,
    countryNameFilter,
    handleRegionFilterChange,
    regionFilter,
  }
}
