import { StatsModel } from "./StatsModel";
import { IItem } from "./../interfaces/IItems";

export class ItemModel implements IItem {
  name = "";
  damage = {
    min: 0,
    max: 0,
  };
  stats = new StatsModel();
  value = 0;
}
