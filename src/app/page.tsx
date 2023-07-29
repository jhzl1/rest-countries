import { restCountriesApi } from "@/api/restCountriesApi"
import { CountryList } from "@/components"
import { CountryShort } from "@/types/country"

const getCountries = async () => {
  const { data: countries, status } = await restCountriesApi.get<CountryShort[]>("/all", {
    params: {
      fields: "name,flags,region,capital,population",
    },
  })

  return { countries, isSuccess: status === 200 }
}

const Home = async () => {
  const { countries, isSuccess } = await getCountries()

  if (!isSuccess) {
    throw new Error("Failed fetching the countries")
  }

  return <CountryList countries={countries} />
}

export default Home
