import { Dispatch, SetStateAction } from "react";
import { CategoryType } from "./category";

export interface SetCategoryType {
    setNavCategories: Dispatch<SetStateAction<CategoryType[]>>;
}