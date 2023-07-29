import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Dropdown } from "@/components/Dropdown"

describe("test at Dropdown component", () => {
  const mockedHandleSelectValue = jest.fn()
  const options = ["America", "Africa"]

  test("should call handleSelectValue when select a option", () => {
    render(<Dropdown onSelectValue={mockedHandleSelectValue} options={options} />)

    const dropdownButton = screen.getByTestId("button-dropdown")

    fireEvent.click(dropdownButton)

    const americaOption = screen.getByText(/america/i)

    fireEvent.click(americaOption)

    expect(mockedHandleSelectValue).toBeCalled()
    expect(mockedHandleSelectValue).toBeCalledTimes(1)
    expect(mockedHandleSelectValue).toBeCalledWith("America")
  })

  test("should call handleSelectValue when click on reset button", () => {
    render(<Dropdown onSelectValue={mockedHandleSelectValue} options={options} value="America" />)

    const resetButton = screen.getByTestId("button-reset-value")

    fireEvent.click(resetButton)

    expect(mockedHandleSelectValue).toBeCalled()
    expect(mockedHandleSelectValue).toBeCalledWith("")
  })

  test("should renders the button with placeholder text", () => {
    render(<Dropdown options={options} onSelectValue={mockedHandleSelectValue} />)
    const buttonElement = screen.getByTestId("button-dropdown")
    expect(buttonElement).toHaveTextContent("Filter")
  })
})
