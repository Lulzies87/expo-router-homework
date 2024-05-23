import { useSelector } from "react-redux";
import { RootState } from "./store";

export function getStats() {
  return useSelector(({ stats }: RootState) => stats);
}
