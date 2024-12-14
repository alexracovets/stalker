import { FC } from "react";

export interface CategoryType {
    ico: FC<{ color: string }>;
    name: string;
    route: string | false
}