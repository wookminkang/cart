import { atom } from "recoil"
import { getCategoryDatas } from "../api/api"

export const categoryState = atom({
	key : "categoryState", // 고유키값
	default : false,
})