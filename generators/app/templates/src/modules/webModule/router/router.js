/**
 * Created by chenxiaojun on 16/10/12.
 */
const routers = [
    {
        path: '/foo',
        component: function (resolve) {
            require(['../views/foo.vue'], resolve)
        }
    },
];
export default routers