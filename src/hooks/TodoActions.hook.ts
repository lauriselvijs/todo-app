import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/app/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
