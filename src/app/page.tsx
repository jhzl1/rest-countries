import { restCountriesApi } from "@/api/restCountriesApi"
import { CountrySmall } from "@/types/countrySmall"
import { CountryList } from "./CountryList"

const getCountries = async () => {
  const { data: countries, statusText } = await restCountriesApi.get<CountrySmall[]>("/all", {
    params: {
      fields: "name,flags,region,capital,population",
    },
  })

  return { countries, isSuccess: statusText === "OK" }
}

export default async function Home() {
  const { countries, isSuccess } = await getCountries()

  if (!isSuccess) {
    throw new Error("Failed fetching the countries")
  }

  return <CountryList countries={countries} />
}
