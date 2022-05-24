import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import titleUserComponent from "../titleUser/titleUser.component.js";

let postsModule = angular
    .module("app.posts", [uiRouter])
    .component("app.titleUser", titleUserComponent).name;
export default postsModule;






