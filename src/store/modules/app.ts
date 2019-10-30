import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import { ClientManager } from "$api_model/ClientManager";
import { RequestGetMenu } from "$api_bean/RequestGetMenu";
import store from "@/store";
import axios from "@/api";
import { RU } from "$api_model/RU";
import {uiSmLoginResponese} from "$api_bean/uiSmLoginResponese";
import {SiteObj} from "$api_model/SiteObj";
import {SdjsPerson} from "$api_bean/SdjsPerson";

const clientManager = ClientManager.getInstance();

export interface AppState {
  currentCompany: uiSmLoginResponese
  currentSite: SiteObj
  companyList: uiSmLoginResponese[]
  siteList: SiteObj[]
  person: SdjsPerson
  asideMenu: Array<any>
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements AppState{
  currentCompany = clientManager.getCurCompany();
  currentSite = clientManager.getCurSiteObj();
  companyList = clientManager.getCompanys();
  siteList = clientManager.getSites();
  person = clientManager.getPerson();
  asideMenu = [];
  @Mutation
  changeAsideMenu(asideMenu) {
    this.asideMenu = asideMenu;
  }

  // @Action({ commit: "changeAsideMenu" })
  // async fetchAsideMenu() {
  //   let menuReq = new RequestGetMenu();
  //   menuReq.setOperationB(this.currentSite.getOperationB());
  //   menuReq.setTreeNodeType(clientManager.getCurrentTreeNode());
  //   let menus = await axios.fetch(RU.SEC_getMenu, menuReq);
  //   console.log(menus, " menus ====================");
  //   return menus;
  // }
}

export const AppModule = getModule(App);
