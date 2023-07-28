import { restCountriesApi } from "@/api/restCountriesApi"
import { CountryList } from "@/components"
import { CountrySmall } from "@/types/countrySmall"

const getCountries = async () => {
  const { data: countries, statusText } = await restCountriesApi.get<CountrySmall[]>("/all", {
    params: {
      fields: "name,flags,region,capital,population",
    },
  })

  return { countries, isSuccess: statusText === "OK" }
}

const Home = async () => {
  const { countries, isSuccess } = await getCountries()

  if (!isSuccess) {
    throw new Error("Failed fetching the countries")
  }

  return <CountryList countries={countries} />
}

export default Home
