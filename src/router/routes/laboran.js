import store from '@/store'

export default [
    //laboran
    {
        path: '/laboran/student-class',
        name: 'laboran-studentclass',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/student-class/index')
    },
    {
        path: '/laboran/student',
        name: 'laboran-student',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/student/index')
    },
    {
        path: '/laboran/staff',
        name: 'laboran-staff',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/staff/index')
    },
    {
        path: '/laboran/course',
        name: 'laboran-course',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/course/index')
    },
    {
        path: '/laboran/classroom',
        name: 'laboran-classroom',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/classroom/index')
    },
    {
        path: '/laboran/room',
        name: 'laboran-room',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/room/index')
    },
    {
        path: '/laboran/class-course',
        name: 'laboran-classcourse',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/class-course/index')
    },
    {
        path: '/laboran/asprak-class',
        name: 'laboran-asprakclass',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                let role = store.getters.getRoleUser
                if(role && (role == 'laboran' || role == 'staff')){
                    next()
                }
                else{
                    next({ name: 'error-404' })
                }
            },
        },
        component: () => import('../../views/pages/laboran/asprak-class/index')
    },
]