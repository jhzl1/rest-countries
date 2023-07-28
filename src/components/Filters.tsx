"use client"

import { Dropdown } from "./Dropdown"
import { InputFilter } from "./InputFilter"

interface Props {
  onInputFilterChange: (country: string) => void
  countryNameFilter: string
  regionNameFilter: string
  onRegionFilterChange: (region: string) => void
}

export const Filters = ({
  countryNameFilter,
  onInputFilterChange,
  onRegionFilterChange,
  regionNameFilter,
}: Props) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  return (
    <div className="flex justify-between">
      <InputFilter
        placeholder="Search for a country..."
        value={countryNameFilter}
        onChange={onInputFilterChange}
      />

      <Dropdown
        options={regions}
        placeholder="Filter by region"
        className="w-52"
        onSelectValue={onRegionFilterChange}
        value={regionNameFilter}
      />
    </div>
  )
}
