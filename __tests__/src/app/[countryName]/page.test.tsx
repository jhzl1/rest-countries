import { restCountriesApi } from "@/api/restCountriesApi"
import CountryDetailPage from "@/app/[countryName]/page"
import { render, screen } from "@testing-library/react"
import MockAdapter from "axios-mock-adapter"
import { mockCountryResp } from "../../../__mocks__/mockCountryResp"

const mockApi = new MockAdapter(restCountriesApi)

jest.mock("next/navigation", () => {
  const actual = jest.requireActual("next/navigation")
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      back: jest.fn(),
    })),
  }
})

describe("test at Country page detail", () => {
  beforeEach(async () => {
    mockApi.onGet("/name/Venezuela").reply(200, mockCountryResp)

    const jsx = await CountryDetailPage({ params: { countryName: "Venezuela" } })
    render(jsx)
  })

  test("should render the country info", () => {
    const title = screen.getByTestId("country-title")

    expect(title.textContent).toBe(mockCountryResp[0].name.official)
  })
})
