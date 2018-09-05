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

  // Account
  /* {
    path: "/account",
    name: "account.index",
    component: () => import("@/views/Account/Index.vue"),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true
    }
  }, */

  // Login
  /* {
    path: "/login",
    name: "login.index",
    component: () => import("@/views/Login/Index.vue"),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true
    }
  }, */

  // Register
  /* {
    path: "/register",
    name: "register.index",
    component: () => import("@/views/Register/Index.vue"),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true
    }
  }, */

  {
    path: "/*",
    redirect: "/"
  }
];
