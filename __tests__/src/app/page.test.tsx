import { restCountriesApi } from "@/api/restCountriesApi"
import MockAdapter from "axios-mock-adapter"
import { mockCountriesResp } from "../../__mocks__/mockCountryResp"
import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

const mockApi = new MockAdapter(restCountriesApi)

describe("test in home page", () => {
  test("should render 3 countries", async () => {
    mockApi.onGet("/all").reply(200, mockCountriesResp)

    const jsx = await Home()
    render(jsx)

    const samoaTitle = screen.getByText(/samoa/i)
    const tongaTitle = screen.getByText(/tonga/i)
    const peruTitle = screen.getByText(/peru/i)

    expect(samoaTitle).toBeDefined()
    expect(tongaTitle).toBeDefined()
    expect(peruTitle).toBeDefined()
  })
})
