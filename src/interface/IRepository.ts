export interface IRepository<T> {
  setObject: (item: any) => T;
  mapObjects: (item: any[]) => T[];
}
