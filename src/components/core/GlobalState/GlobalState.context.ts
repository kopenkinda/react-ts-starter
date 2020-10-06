import { createContext } from "react";

export interface IGlobalContext {
  state: IGlobalState | null;
  setState: (newState: IGlobalState) => void;
}

export interface IGlobalState {

}

export const GlobalContext = createContext<IGlobalContext>({
  state: null,
  setState: (newState: IGlobalState) => void 0,
});