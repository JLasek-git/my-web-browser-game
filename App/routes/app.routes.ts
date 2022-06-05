import { AppRoutesEnum } from "../enums/AppRoutesEnum";
import { AppRoutesNamesEnum } from "../enums/AppRoutesNamesEnum";
import { NextRouter } from "next/router";

export type Route = {
  pathname: AppRoutesNamesEnum;
  route: AppRoutesEnum;
};

export const availableAppRoutes: Route[] = [
  {
    pathname: AppRoutesNamesEnum.Profile,
    route: AppRoutesEnum.Profile,
  },
  {
    pathname: AppRoutesNamesEnum.Tavern,
    route: AppRoutesEnum.Tavern,
  },
  {
    pathname: AppRoutesNamesEnum.Armory,
    route: AppRoutesEnum.Armory,
  },
  {
    pathname: AppRoutesNamesEnum.MagicShop,
    route: AppRoutesEnum.MagicShop,
  },
  {
    pathname: AppRoutesNamesEnum.Stable,
    route: AppRoutesEnum.Stable,
  },
  {
    pathname: AppRoutesNamesEnum.Dungeons,
    route: AppRoutesEnum.Dungeons,
  },
];
