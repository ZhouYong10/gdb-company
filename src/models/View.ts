export default class View {
  id!: string;
  name!: string;
  path!: string;

  constructor(id: string, name = "", path: string) {
    this.id = id;
    this.name = name;
    this.path = path;
  }

  goImport() {
    return () => import(this.path);
  }
}
