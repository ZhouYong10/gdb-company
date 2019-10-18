export default class Menu {
  id!: string;
  name!: string;
  // path 按view所在目录结构书写
  path!: string;

  constructor(id: string, name: string, path: string) {
    this.id = id;
    this.name = name;
    this.path = path;
  }
}
