export enum TodoStatus {
  New = 'New',
  InProgress = 'InProgress',
  Complete = 'Complete',
  Abandoned = 'Abandoned',
}

export interface Todo {
  id: string;
  name: string;
  description: string;
  status: TodoStatus;
}
