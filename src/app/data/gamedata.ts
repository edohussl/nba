import { IGame } from "./game";
import { IMeta } from "./meta";

export interface IGameData {
    data: IGame[],
    meta: IMeta
  }