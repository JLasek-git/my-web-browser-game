import { AppRoutesEnum } from "../enums/AppRoutesEnum";
import { AppRoutesNamesEnum } from "../enums/AppRoutesNamesEnum";

export type Route = {
  name: AppRoutesNamesEnum;
  path: AppRoutesEnum;
};

export const availableAppRoutes: Route[] = [
  {
    name: AppRoutesNamesEnum.Profile,
    path: AppRoutesEnum.Profile,
  },
  {
    name: AppRoutesNamesEnum.Tavern,
    path: AppRoutesEnum.Tavern,
  },
  {
    name: AppRoutesNamesEnum.Armory,
    path: AppRoutesEnum.Armory,
  },
  {
    name: AppRoutesNamesEnum.MagicShop,
    path: AppRoutesEnum.MagicShop,
  },
  {
    name: AppRoutesNamesEnum.Stable,
    path: AppRoutesEnum.Stable,
  },
  {
    name: AppRoutesNamesEnum.Dungeons,
    path: AppRoutesEnum.Dungeons,
  },
];
