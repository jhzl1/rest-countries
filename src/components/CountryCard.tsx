import Image from "next/image"

interface Props {
  name: string
  population: number
  region: string
  capital: string
  imageUrl: string
}

const CountryCard = ({ imageUrl, name, population, region, capital }: Props) => {
  return (
    <div className="rounded-md overflow-hidden flex flex-col bg-white shadow-md transition-all duration-200 hover:scale-105 dark:bg-dark-primary">
      <div className="w-full h-48 relative">
        <Image
          src={imageUrl}
          alt={name}
          data-testid="country-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="py-8 px-5 text-sm space-y-2">
        <h3 className="font-bold mb-3 text-lg">{name}</h3>

        <p>
          <strong>Population:</strong> {population.toLocaleString("en-US", { style: "decimal" })}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  )
}

export default CountryCard
