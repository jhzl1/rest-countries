import { BackButton } from "@/components/BackButton"
import { fireEvent, render, screen } from "@testing-library/react"

const mockedBack = jest.fn()

jest.mock("next/navigation", () => {
  const actual = jest.requireActual("next/navigation")
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      back: mockedBack,
    })),
  }
})

describe("test at ButtonBack", () => {
  test("should call back function of useRouter hook", () => {
    render(<BackButton />)
    const backButton = screen.getByText(/back/i)

    fireEvent.click(backButton)

    expect(mockedBack).toBeCalled()
    expect(mockedBack).toBeCalledTimes(1)
  })
})
