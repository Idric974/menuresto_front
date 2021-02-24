import Vue from "vue";
import VueRouter from "vue-router";
import accueil from "../views/accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/accueil",
    name: "accueil",
    component: accueil,
  },
  {
    path: "/afficherUneCarte",
    name: "afficherUneCarte",
    component: () =>
      import(
        /* webpackChunkName: "afficherUneCarte" */ "../views/afficherUneCarte.vue"
      ),
  },
  {
    path: "/creerUneCarte",
    name: "creerUneCarte",
    component: () =>
      import(
        /* webpackChunkName: "creerUneCarte" */ "../views/creerUneCarte.vue"
      ),
  },
  {
    path: "/carteVito",
    name: "carteVito",
    component: () =>
      import(/* webpackChunkName: "carteVito" */ "../views/carteVito.vue"),
  },

  {
    path: "/pageLegaleCgu",
    name: "pageLegaleCgu",
    component: () =>
      import(/* webpackChunkName: "carteVito" */ "../views/pageLegaleCgu.vue"),
  },

  {
    path: "/pageLegaleConfidentialite",
    name: "pageLegaleConfidentialite",
    component: () =>
      import(
        /* webpackChunkName: "pageLegaleConfidentialite" */ "../views/pageLegaleConfidentialite.vue"
      ),
  },
  {
    path: "/pageLegaleCookies",
    name: "pageLegaleCookies",
    component: () =>
      import(
        /* webpackChunkName: "pageLegaleCookies" */ "../views/pageLegaleCookies.vue"
      ),
  },

  {
    path: "/pageLegaleMentions",
    name: "pageLegaleMentions",
    component: () =>
      import(
        /* webpackChunkName: "pageLegaleMentions" */ "../views/pageLegaleMentions.vue"
      ),
  },

  {
    path: "/connexion",
    name: "connexion",
    component: () =>
      import(/* webpackChunkName: "connexion" */ "../views/connexion.vue"),
  },

  {
    path: "/inscription",
    name: "inscription",
    component: () =>
      import(/* webpackChunkName: "inscription" */ "../views/inscription.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
