import Menu from "@/models/Menu";

export default class MenuGroup {
  id!: string;
  name!: string;
  icon!: string;
  path!: string;
  menus: Array<Menu> = [];

  constructor(id: string, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}
