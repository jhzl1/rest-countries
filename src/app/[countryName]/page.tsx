import CountryCard from "@/components/CountryCard"

const Page = () => {
  return (
    <div>
      <CountryCard
        imageUrl="https://flagcdn.com/as.svg"
        name="Samoa"
        capital="Burindi"
        population={1000000}
        region="El cambur"
      />
    </div>
  )
}

export default Page
