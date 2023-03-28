import { useContext } from "react";
import CafeteriaContext from "@/context/CafeteriaProvider";

function useCafeteria() {

  return useContext(CafeteriaContext)
}

export default useCafeteria