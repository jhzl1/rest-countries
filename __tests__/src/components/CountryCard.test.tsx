import CountryCard from "@/components/CountryCard"
import { render, screen } from "@testing-library/react"

describe("Test in CountryCard Component", () => {
  const src = "https://flagcdn.com/as.svg"

  beforeEach(() => {
    render(
      <CountryCard
        imageUrl={src}
        name="Venezuela"
        capital="Caracas"
        population={29000000}
        region="America"
      />,
    )
  })

  it("should render the population formatted", () => {
    const population = screen.getByText(/29,000,000/i)

    expect(population).toBeDefined()
  })

  it("should render the image", () => {
    const image = screen.getByTestId("country-image")

    expect(image.getAttribute("src")).toBe(src)
  })
})
