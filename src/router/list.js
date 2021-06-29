import test from "../view/test";
import container from '../view/container'
import error from "../view/public/error";

export const list = [
    {
        path: '/',
        name: 'container',
        component: container,
        children:[
            {
                path: '/error',
                name: 'error',
                component: error
            }
        ]
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]