import { StatsModel } from "./../models/StatsModel";
import { Damage } from "../types/Damage";

export interface IItem {
  name: string;
  damage?: Damage;
  armor?: number;
  stats: StatsModel;
  value: number;
}
