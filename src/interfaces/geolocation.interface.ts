export interface Geolocation {
  results: Result[];
  generationtime_ms: number;
}

export interface Result {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  country_code: string;
  timezone: string;
  population?: number;
  country_id: number;
  country: string;
}
