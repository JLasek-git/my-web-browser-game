import { PlayerModel } from "../models/PlayerModel";

const testPlayer: PlayerModel = new PlayerModel();

export async function getPlayer(): Promise<PlayerModel> {
  const data = await fetch("http://localhost:5000/playerData");
  const response = data.json();

  return response;
}
