import component from './index.vue';
const route_name = 'todo';
export default [
    {
        path: '/todo/:id',
        component,
        meta: {
            route_name,
        },
    },
];
