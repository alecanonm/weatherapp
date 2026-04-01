import { geoLocationApi } from "../api/geoLocation.api";
import type { Geolocation } from "../interfaces/geolocation.interface";

export const getGeoLocation = async (city: string): Promise<Geolocation> => {
  const response = await geoLocationApi.get<Geolocation>("/search", {
    params: {
      name: city,
    },
  });

  return response.data;
};
