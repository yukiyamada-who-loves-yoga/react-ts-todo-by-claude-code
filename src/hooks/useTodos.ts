import { useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo, FilterOptions, SortOptions, TodoStatus } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterOptions>({});
  const [sort, setSort] = useState<SortOptions>({ field: 'createdAt', order: 'desc' });

  const addTodo = useCallback((title: string, description: string, deadline?: string) => {
    const now = new Date().toISOString();
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      status: '未着手',
      deadline,
      createdAt: now,
      updatedAt: now,
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Omit<Todo, 'id' | 'createdAt'>>) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id 
        ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
        : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const updateStatus = useCallback((id: string, status: TodoStatus) => {
    updateTodo(id, { status });
  }, [updateTodo]);

  const filteredAndSortedTodos = useMemo(() => {
    let result = [...todos];

    if (filter.id) {
      result = result.filter(todo => todo.id.includes(filter.id!));
    }
    if (filter.status) {
      result = result.filter(todo => todo.status === filter.status);
    }
    if (filter.deadline) {
      result = result.filter(todo => todo.deadline === filter.deadline);
    }

    result.sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];
      
      if (!aValue && !bValue) return 0;
      if (!aValue) return sort.order === 'asc' ? 1 : -1;
      if (!bValue) return sort.order === 'asc' ? -1 : 1;
      
      const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      return sort.order === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [todos, filter, sort]);

  return {
    todos: filteredAndSortedTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    updateStatus,
    filter,
    setFilter,
    sort,
    setSort,
  };
};