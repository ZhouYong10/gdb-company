import Menu from "@/models/Menu";

export default class MenuGroup {
  id!: string;
  name!: string;
  accessPoint!: string;
  icon!: string;
  menus: Array<Menu> = [];

  constructor(id: string, name: string, accessPoint: string, icon: string) {
    this.id = id;
    this.name = name;
    this.accessPoint = accessPoint;
    this.icon = icon;
  }
}
