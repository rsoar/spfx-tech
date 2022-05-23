import { IRepository } from "../interface/IRepository";
import { ITask, ITaskRaw } from "../interface/ITasks";

export class TaskRepository implements IRepository<ITask> {
  setObject(item: ITaskRaw): ITask {
    return {
      id: item.ID,
      title: item.Title,
      description: item.Descricao,
      effort: item.Estimativa,
      ownerId: item.ResponsavelId,
      status: item.Situacao,
    };
  }
  mapObjects(items: ITaskRaw[]) {
    return items.map((m) => this.setObject(m));
  }
}
