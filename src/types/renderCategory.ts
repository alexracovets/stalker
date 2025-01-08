import { Dispatch, SetStateAction } from "react";
import { CategoryType } from "./category";

export interface RenderCategoryType {
    activeCategories: string[],
    setNavCategories: Dispatch<SetStateAction<CategoryType[]>>;
}