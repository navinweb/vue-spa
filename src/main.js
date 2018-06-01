import Vue from "vue";
import Router from "./routes";
import StateMachine from "javascript-state-machine";

const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
    state: null
  },
  created: function() {
    const fsm = new StateMachine({
      init: "home",
      transitions: [
        { name: "about", from: "*", to: "about" },
        { name: "home", from: "*", to: "home" }
      ],
      methods: {
        onHome: function (event, fsm) {
          console.log(event);
        },
        onAbout: function (event, fsm) {
          console.log(event);
        }
      }
    });

    // this.state = StateHelper.object(this.fsm).data;

    // var helper = StateHelper.object(this.fsm);

    // this.state = helper.data;

    // StateHelper.vueRouter(router, helper);
  },
  computed: {
    ViewComponent() {
      const matchingView = Router.routes.find(element => {
        if (element.path == this.currentRoute) {
          return element.path;
        }
      });

      return matchingView
        ? require("./pages/" + matchingView.name + ".vue").default
        : require("./pages/Home.vue").default;
    }
  },
  render(h, fsm) {
    return h(this.ViewComponent);
  }
});

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
