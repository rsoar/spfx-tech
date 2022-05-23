export interface ITaskRaw {
  ID: number;
  Title: string;
  Descricao: string;
  Estimativa: number;
  ResponsavelId: number;
  Situacao: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  ownerId: number;
  effort: number;
  status: string;
}
