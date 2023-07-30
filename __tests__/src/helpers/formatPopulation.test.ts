import { formatPopulation } from "@/helpers"

describe("test in formatPopulation function", () => {
  test("should return a value with commas as thousand separator", () => {
    expect(formatPopulation(10000)).toEqual("10,000")
  })
})
