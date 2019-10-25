export default class Menu {
  id!: string;
  name!: string;
  accessPoint!: string;
  icon?: string;
  // path 按view所在目录结构书写
  path!: string;

  constructor(
    id: string,
    name: string,
    accessPoint: string,
    path: string,
    icon: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.accessPoint = accessPoint;
    this.icon = icon;
    this.path = path;
  }
}
