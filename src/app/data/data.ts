import { IMeta } from "./meta";
import { ITeam } from "./team";

export interface IData {
    data: ITeam[],
    meta: IMeta
  }