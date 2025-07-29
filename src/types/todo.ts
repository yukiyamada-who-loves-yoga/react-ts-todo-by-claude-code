export type TodoStatus = '未着手' | '進行中' | '完了';

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  description: string;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterOptions {
  id?: string;
  status?: TodoStatus;
  deadline?: string;
}

export type SortField = 'id' | 'deadline' | 'createdAt' | 'updatedAt';
export type SortOrder = 'asc' | 'desc';

export interface SortOptions {
  field: SortField;
  order: SortOrder;
}