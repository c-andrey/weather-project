import CitiesInterface from "../types/CitiesInterface"
import OptionsInterface from "../types/OptionsInterface"

const formatCities = (cities: CitiesInterface[]): OptionsInterface[] => {
  try {
    return ( cities ).map((city) => ({
      label: city.name,
      value: city.name,
      lat: city.lat,
      lon: city.lon,
      country: city.country
    }))
  } catch (error) {
    throw error
  }
}

export default formatCities