import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { IRepository } from "../interface/IRepository";
import { IListService } from "../interface/IListService";

export class ListService<T> implements IListService<T> {
  private _list: IList;
  private _repository: IRepository<T>;

  constructor(listName: string, repository: IRepository<T>) {
    this._list = this.getList(listName);
    this._repository = repository;
  }

  getList(listName: string): IList {
    return sp.web.lists.getByTitle(listName);
  }

  async getItems(): Promise<T[]> {
    let _items: any[] = await this._list.items.top(5000).get();
    return this._repository.mapObjects(_items);
  }

  async getItemsByColumn(column: string, filter: string): Promise<T[]> {
    return this._list.items.filter(`${column} eq ${filter}`).top(5000).get();
  }
}
