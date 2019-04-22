import { api, APIKey } from "./config";

const getCitiesInfo = (boxCoordinates, zoom) =>
  api.get(
    `/box/city?bbox=${boxCoordinates},${zoom}&units=metric&appid=${APIKey}`
  );

export { getCitiesInfo };
