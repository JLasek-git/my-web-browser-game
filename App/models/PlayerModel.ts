import { MountModel } from "./MountModel";
import { StatsModel } from "./StatsModel";
import { ItemModel } from "./ItemModel";
import { IPlayerModel } from "./../interfaces/IPlayerModel";
export class PlayerModel implements IPlayerModel {
  name = "";
  level = 0;
  experience = 0;
  inventory = [];
  equipment = {
    weapon: new ItemModel(),
    gloves: new ItemModel(),
    boots: new ItemModel(),
    helmet: new ItemModel(),
    earrings: new ItemModel(),
    chestplate: new ItemModel(),
    ring: new ItemModel(),
  };
  playerStats = new StatsModel();
  money = 0;
  mount = new MountModel();
}
