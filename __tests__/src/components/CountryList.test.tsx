import { CountryList } from "@/components"
import { useFilters } from "@/hooks/useFilters"
import { act, fireEvent, render, screen } from "@testing-library/react"

const mockedUseFilter = useFilters as jest.MockedFunction<typeof useFilters>

jest.mock("@/hooks/useFilters")

describe("test at CountryList component", () => {
  const mockedHandleCountryFilterNameChange = jest.fn()
  const mockedHandleRegionFilterChange = jest.fn()

  const mockedCountry = [
    {
      capital: ["Caracas"],
      flags: { alt: "test", png: "test", svg: "https://flagcdn.com/ve.svg" },
      name: {
        common: "Venezuela",
        nativeName: {
          spa: {
            official: "República Bolivariana de Venezuela",
            common: "Venezuela",
          },
        },
        official: "Venezuela",
      },
      population: 500000,
      region: "Americas",
    },
  ]

  beforeEach(() => {
    mockedUseFilter.mockReturnValue({
      countryNameFilter: "",
      filteredCountries: mockedCountry,
      regionFilter: "",
      handleCountryFilterNameChange: mockedHandleCountryFilterNameChange,
      handleRegionFilterChange: mockedHandleRegionFilterChange,
    })

    render(<CountryList countries={mockedCountry} />)
  })

  test("should call handleRegionFilterChange when select an option in the dropdown", () => {
    const dropdown = screen.getByTestId("button-dropdown")

    fireEvent.click(dropdown)

    const americaOption = screen.getByText(/europe/i)

    fireEvent.click(americaOption)

    expect(mockedHandleRegionFilterChange).toBeCalled()
    expect(mockedHandleRegionFilterChange).toBeCalledWith("Europe")
  })

  test("should call handleCountryFilterNameChange when type in input", async () => {
    jest.useFakeTimers()
    const inputFilter = screen.getByRole("textbox")

    fireEvent.change(inputFilter, { target: { value: "Ca" } })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(mockedHandleCountryFilterNameChange).toHaveBeenCalledWith("Ca")
    jest.useRealTimers()
  })
})
