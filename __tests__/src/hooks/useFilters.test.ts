import { useFilters } from "@/hooks"
import { act, renderHook } from "@testing-library/react"
import { mockCountriesResp, peru, samoa, tonga } from "../../__mocks__/mockCountryResp"

describe("test at useFilterHook", () => {
  test("should filter countries by name", () => {
    const { result } = renderHook(() => useFilters(mockCountriesResp))

    act(() => {
      result.current.handleCountryFilterNameChange("Peru")
    })

    expect(result.current.filteredCountries).toEqual([peru])
  })

  test("should filter countries by region", () => {
    const { result } = renderHook(() => useFilters(mockCountriesResp))

    act(() => {
      result.current.handleRegionFilterChange("Oceania")
    })

    expect(result.current.filteredCountries).toEqual([samoa, tonga])
  })

  test("should filter countries by region and name", () => {
    const { result } = renderHook(() => useFilters(mockCountriesResp))

    act(() => {
      result.current.handleRegionFilterChange("Oceania")
      result.current.handleCountryFilterNameChange("Samoa")
    })

    expect(result.current.filteredCountries).toEqual([samoa])
  })

  test("should return default countries when filters are reseted", () => {
    const { result } = renderHook(() => useFilters(mockCountriesResp))

    act(() => {
      result.current.handleRegionFilterChange("Oceania")

      result.current.handleCountryFilterNameChange("Tonga")
    })

    expect(result.current.filteredCountries).toEqual([tonga])

    act(() => {
      result.current.handleCountryFilterNameChange("")
      result.current.handleRegionFilterChange("")
    })

    expect(result.current.filteredCountries).toEqual(mockCountriesResp)
  })
})
