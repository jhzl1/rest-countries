import { restCountriesApi } from "@/api/restCountriesApi"
import { BackButton } from "@/components/BackButton"
import { formatPopulation } from "@/helpers"
import { Country } from "@/types/country"
import Image from "next/image"
interface Props {
  params: {
    countryName: string
  }
}

const getCountryDetail = async (countryName: string) => {
  const { data, status } = await restCountriesApi.get<Country[]>(`/name/${countryName}`, {
    params: {
      fullText: true,
    },
  })

  const [country] = data

  return { country, isSuccess: status === 200 }
}

const CountryDetailPage = async ({ params }: Props) => {
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

  const currencyString = Object.keys(currencies)
    .map((key) => currencies[key].name)
    .join(", ")

  const languagesString = Object.keys(languages)
    .map((key) => languages[key])
    .join(", ")

  const [topLevelDomain] = tld

  const firstNativeName = Object.keys(name.nativeName)[0]

  return (
    <div className="space-y-5 lg:space-y-14">
      <BackButton />
      <div className="grid gap-5 md:grid-cols-2 lg:gap-x-20">
        <div className="w-full h-40 lg:h-96 relative">
          <Image
            src={flags.svg}
            alt={name.official}
            data-testid="country-image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8" data-testid="country-title">
            {name.official}
          </h2>
          <div className="grid gap-y-3 md:grid-cols-2 gap-x-10">
            <div className="space-y-3">
              <p>
                <strong>Native name: </strong>
                {name.nativeName[firstNativeName].official}
              </p>
              <p>
                <strong>Population: </strong>
                {formatPopulation(population)}
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

export default CountryDetailPage
