import test from "../view/test";
import container from '../view/container'
import error from "../view/public/error";

export const list = [
    {
        path: '/',
        name: 'container',
        component: container
    },
    {
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: '/error',
        name: 'error',
        component: error
    }
]