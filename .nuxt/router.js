import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a902315 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _620b6106 = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _48dce95d = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _567c8daa = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _7965b3c2 = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _44d2576d = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _558cbbcc = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _5582aa7c = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _4fe17ed8 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _9c4e462c = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _6a902315,
    name: "index___ar"
  }, {
    path: "/google",
    component: _620b6106,
    name: "google___en"
  }, {
    path: "/icons",
    component: _48dce95d,
    name: "icons___en"
  }, {
    path: "/notifications",
    component: _567c8daa,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _7965b3c2,
    name: "regular___en"
  }, {
    path: "/rtl",
    component: _44d2576d,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _558cbbcc,
    name: "starter-page___en"
  }, {
    path: "/typography",
    component: _5582aa7c,
    name: "typography___en"
  }, {
    path: "/user",
    component: _4fe17ed8,
    name: "user___en"
  }, {
    path: "/ar/google",
    component: _620b6106,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _48dce95d,
    name: "icons___ar"
  }, {
    path: "/ar/notifications",
    component: _567c8daa,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _7965b3c2,
    name: "regular___ar"
  }, {
    path: "/ar/rtl",
    component: _44d2576d,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _558cbbcc,
    name: "starter-page___ar"
  }, {
    path: "/ar/typography",
    component: _5582aa7c,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _4fe17ed8,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _9c4e462c,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _9c4e462c,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _6a902315,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
