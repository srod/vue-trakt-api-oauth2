/* ============
 * Routes File
 * ============ */

export default [
  // Home
  {
    path: "/",
    name: "home.index",
    component: () => import("@/views/Home/Index.vue")
  },

  // Trakt
  {
    path: "/trakt",
    name: "trakt.index",
    component: () => import("@/views/Trakt/Index.vue"),
    children: [
      {
        path: "redirect",
        name: "trakt.redirect",
        component: () => import("@/views/Trakt/Redirect.vue"),
        meta: {
          guest: true
        }
      },
      {
        path: "history",
        name: "trakt.history",
        component: () => import("@/views/Trakt/History.vue"),
        meta: {
          auth: true
        }
      }
    ]
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  },

  {
    path: "*",
    redirect: "404"
  }
];
