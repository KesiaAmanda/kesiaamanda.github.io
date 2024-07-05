import { useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";

export function usePages() {
   return useContext(PagesContext)
}