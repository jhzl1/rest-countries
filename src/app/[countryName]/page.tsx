import { restCountriesApi } from "@/api/restCountriesApi"
import { BackButton } from "@/components/BackButton"
import { CountryFull } from "@/types/countrySmall"
import { NextPage } from "next"
import Image from "next/image"
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

  const { country } = await getCountryDetail(countryName)

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders = [],
  } = country

  const currencyCodes = Object.keys(currencies)
  const currencyValues = currencyCodes.map((key) => currencies[key].name)
  const currencyString = currencyValues.join(", ")

  const languagesCodes = Object.keys(languages)
  const languagesValues = languagesCodes.map((key) => languages[key])
  const languagesString = languagesValues.join(", ")

  const [topLevelDomain] = tld

  const firstNativeName = Object.keys(name.nativeName)[0]

  return (
    <div className="space-y-14">
      <BackButton />
      <div className="grid grid-cols-2 gap-x-20">
        <div>
          <div className="w-full h-96 relative">
            <Image
              src={flags.svg}
              alt={name.official}
              data-testid="country-image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8">{name.official}</h2>
          <div className="grid grid-cols-2 gap-x-10">
            <div className="space-y-3">
              <p>
                <strong>Native name: </strong>
                {name.nativeName[firstNativeName].official}
              </p>
              <p>
                <strong>Population: </strong>
                {population.toLocaleString("en-US", { style: "decimal" })}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Subregion: </strong>
                {subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {capital}
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong>Top level domain: </strong>
                {topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {currencyString}
              </p>
              <p>
                <strong>Languages: </strong>
                {languagesString}
              </p>
            </div>
          </div>
          <div className="my-10"></div>

          {borders.length > 0 ? (
            <p>
              Border countries:{" "}
              {borders.map((country) => (
                <span
                  key={country}
                  className="mr-2 px-5 py-1 shadow-md dark:bg-dark-primary rounded-md"
                >
                  {country}
                </span>
              ))}{" "}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
