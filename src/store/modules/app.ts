import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import { ClientManager } from "$api_model/ClientManager";
import store from "@/store";
import { uiSmLoginResponese } from "$api_bean/uiSmLoginResponese";
import { SdjsPerson } from "$api_bean/SdjsPerson";
import { SdjsBuildSite } from "$api_bean/SdjsBuildSite";

const clientManager = ClientManager.getInstance();

export interface AppState {
  currentCompany: uiSmLoginResponese;
  currentSite: SdjsBuildSite;
  companyList: uiSmLoginResponese[];
  siteList: SdjsBuildSite[];
  person: SdjsPerson;
  asideMenu: Array<any>;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements AppState {
  currentCompany = clientManager.getCurCompany();
  currentSite = this.currentCompany.getSites()[0];
  companyList = clientManager.getCompanys();
  siteList = this.currentCompany.getSites();
  person = clientManager.getPerson();
  asideMenu = null;

  @Mutation
  private CHANGE_CURRENT_COMPANY(comp) {
    this.currentCompany = comp;
  }

  @Mutation
  private CHANGE_CURRENT_SITE(site) {
    this.currentSite = site;
  }

  @Mutation
  private CHANGE_COMPANY_LIST(comps) {
    this.companyList = comps;
  }

  @Mutation
  private CHANGE_SITE_LIST(sites) {
    this.siteList = sites;
  }

  @Mutation
  private CHANGE_PERSON(person) {
    this.person = person;
  }

  @Mutation
  private CHANGE_ASIDE_MENU(asideMenu) {
    this.asideMenu = asideMenu;
  }

  @Action
  changeCurrentCompany(com) {
    this.CHANGE_CURRENT_COMPANY(com);
    this.CHANGE_SITE_LIST(com.getSites());
    this.CHANGE_CURRENT_SITE(com.getSites()[0]);
  }

  @Action
  changeCurrentSite(site) {
    this.CHANGE_CURRENT_SITE(site);
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
