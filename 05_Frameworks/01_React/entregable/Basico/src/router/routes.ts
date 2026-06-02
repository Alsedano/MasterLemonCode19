import { generatePath } from "react-router-dom";

interface SwitchRoutes {
    root: string,
    listGitHub: string,
    listRickMorty: string,
    detail: string
}

interface Routes extends Omit<SwitchRoutes, "detail"> {
    detail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    listGitHub: "/list/GitHub",
    listRickMorty: "/list/RickMorty",
    detail: "/detail/:id"
}

export const routes: Routes = {
    ...switchRoutes,
    detail: (id: string) => generatePath(switchRoutes.detail, { id })
}