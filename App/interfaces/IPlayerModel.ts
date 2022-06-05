import { StatsModel } from "./../models/StatsModel";
import { MountModel } from "./../models/MountModel";
import { ItemModel } from "../models/ItemModel";

export interface IPlayerModel {
  name: string;
  level: number;
  experience: number;
  inventory: ItemModel[];
  equipment: {
    weapon: ItemModel;
    gloves: ItemModel;
    boots: ItemModel;
    helmet: ItemModel;
    earrings: ItemModel;
    chestplate: ItemModel;
    ring: ItemModel;
  };
  playerStats: StatsModel;
  money: number;
  mount: MountModel;
}
