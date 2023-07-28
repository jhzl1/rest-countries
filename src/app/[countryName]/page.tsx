import { restCountriesApi } from "@/api/restCountriesApi"
import { BackButton } from "@/components/BackButton"
import { CountryFull } from "@/types/countrySmall"
import { NextPage } from "next"
import { useRouter } from "next/router"
interface Params {
  params: {
    countryName: string
  }
}

const getCountryDetail = async (countryName: string) => {
  const { data, statusText } = await restCountriesApi.get<CountryFull[]>(`/name/${countryName}`, {
    params: {
      fullText: true,
    },
  })

  const [country] = data

  return { country, isSuccess: statusText === "OK" }
}

const Page: NextPage<Params> = async ({ params }) => {
  const { countryName } = params

  const resp = await getCountryDetail(countryName)

  console.log(resp)

  return (
    <div className="space-y-14">
      <BackButton />
      <div>
        <div>imagen</div>
        <div>fjfjkfjd</div>
      </div>
    </div>
  )
}

export default Page
