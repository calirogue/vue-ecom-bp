import Router from "vue-router";
import {
  ROUTE_NAME_CART,
  ROUTE_NAME_HOME,
  ROUTE_NAME_ITEM,
  ROUTE_NAME_LOGIN,
  ROUTE_NAME_REGISTER,
  ROUTE_NAME_SELL,
  ROUTE_NAME_FORBIDDEN,
  ROUTE_NAME_NOT_FOUND,
  ROUTE_NAME_INTERNAL_SERVER_ERROR,
  ROUTE_NAME_PROFILE,
  ROUTE_NAME_SHOP,
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_EDIT,
  ROUTE_NAME_SORT,
  ROUTE_NAME_SORTED,
  ROUTE_NAME_CONTACT
} from "@/constants";

export default new Router({
  mode: "history",
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: ROUTE_NAME_HOME,
      component: () => import("@views/Home")
    },
    {
      path: "/shop",
      name: ROUTE_NAME_SHOP,
      component: () => import("@views/Shop")
    },
    {
      path: "/about",
      name: ROUTE_NAME_ABOUT,
      component: () => import("@views/About")
    },
    {
      path: "/sorts/:id",
      name: ROUTE_NAME_SORTED,
      component: () => import("@views/Sorted")
    },
    {
      path: "/contact",
      name: ROUTE_NAME_CONTACT,
      component: () => import("@views/Contact")
    },
    {
      path: "/items/:id",
      name: ROUTE_NAME_ITEM,
      component: () => import("@views/Item")
    },
    {
      path: "/sort",
      name: ROUTE_NAME_SORT,
      component: () => import("@views/Sort")
    },
    {
      path: "/cart",
      name: ROUTE_NAME_CART,
      component: () => import("@views/Cart"),
      meta: { auth: ["user"] }
    },
    {
      path: "/login",
      name: ROUTE_NAME_LOGIN,
      component: () => import("@views/Auth"),
      meta: { auth: false }
    },
    {
      path: "/register",
      name: ROUTE_NAME_REGISTER,
      component: () => import("@views/Auth"),
      meta: { auth: false }
    },
    {
      path: "/sell",
      name: ROUTE_NAME_SELL,
      component: () => import("@views/Sell"),
      meta: { auth: ["admin"] }
    },
    {
      path: "/profile",
      name: ROUTE_NAME_PROFILE,
      component: () => import("@views/Profile"),
      meta: { auth: ["admin"] }
    },
    {
      path: "/403",
      name: ROUTE_NAME_FORBIDDEN,
      component: () => import("@views/Forbidden")
    },
    {
      path: "/404",
      name: ROUTE_NAME_NOT_FOUND,
      component: () => import("@views/NotFound")
    },
    {
      path: "/500",
      name: ROUTE_NAME_INTERNAL_SERVER_ERROR,
      component: () => import("@views/InternalServerError")
    },
    {
      path: "/items/:id/edit",
      name: ROUTE_NAME_EDIT,
      component: () => import("@views/Sell"),
      meta: { auth: ["admin"] }
    }
  ]
});
