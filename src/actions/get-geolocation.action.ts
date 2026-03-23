import { geoLocationApi } from "../api/GeoLocation.api";
import type { Geolocation, Result } from "../interfaces/geolocation.interface";

export const getGeoLocation = async (city: string): Promise<Result> => {
  const response = await geoLocationApi.get<Geolocation>("/search", {
    params: {
      name: city,
    },
  });

  return response.data.results[0];
};
