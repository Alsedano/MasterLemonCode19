import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string,
    list: string,
    listRM: string,
    detail: string;
    detailRM: string
}

interface Routes extends Omit<SwitchRoutes, "detail" | "detailRM"> {
    detail: (id: string) => string;
    detailRM: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list",
    listRM: "/listRM",
    detail: "/detail/:login",
    detailRM: "/detailRM/:id"
}

export const routes: Routes = {
    ...switchRoutes,
    detail: (login: string) => generatePath(switchRoutes.detail, { login }),
    detailRM: (id: string) => generatePath(switchRoutes.detailRM, { id }),
}