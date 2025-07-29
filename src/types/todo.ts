import { TODO_STATUS, SORT_FIELDS, SORT_ORDERS } from '../constants/strings';

export type TodoStatus = typeof TODO_STATUS[keyof typeof TODO_STATUS];

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
  description: string;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export type FilterOptions = {
  id?: string;
  status?: TodoStatus;
  deadline?: string;
}

export type SortField = typeof SORT_FIELDS[keyof typeof SORT_FIELDS];
export type SortOrder = typeof SORT_ORDERS[keyof typeof SORT_ORDERS];

export type SortOptions = {
  field: SortField;
  order: SortOrder;
}