export interface IListService<T> {
  getItems: () => Promise<T[]>;
  getItemsByColumn: (column: string, filter: string) => Promise<T[]>;
}
