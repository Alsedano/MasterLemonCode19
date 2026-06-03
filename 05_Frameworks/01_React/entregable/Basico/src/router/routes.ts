import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string,
    list: string,
    detail: string;
    detailRM: string
}

interface Routes extends Omit<SwitchRoutes, "list" | "detail" | "detailRM"> {
    list: (characters: string) => string;
    detail: (id: string) => string;
    detailRM: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list/:characters",
    detail: "/detail/:login",
    detailRM: "/detailRM/:id"
}

export const routes: Routes = {
    ...switchRoutes,
    list: (characters: string) => generatePath(switchRoutes.list, { characters }),
    detail: (login: string) => generatePath(switchRoutes.detail, { login }),
    detailRM: (id: string) => generatePath(switchRoutes.detailRM, { id }),
}