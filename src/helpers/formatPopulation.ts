export const formatPopulation = (population: number) =>
  population.toLocaleString("en-US", { style: "decimal" })
