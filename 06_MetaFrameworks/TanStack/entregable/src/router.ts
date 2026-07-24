import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './global-css/styles.css'

export function getRouter() {
    return createRouter({
        routeTree,
        scrollRestoration: true,
    });
}