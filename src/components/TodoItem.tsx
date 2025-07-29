import { useState } from 'react';
import type { Todo, TodoStatus } from '../types/todo';
import { LABELS, INPUT_TYPES, DEFAULT_VALUES, TODO_STATUS } from '../constants/strings';

type TodoItemProps = {
  todo: Todo;
  onUpdate: (id: string, updates: Partial<Omit<Todo, 'id' | 'createdAt'>>) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TodoStatus) => void;
}

export const TodoItem = ({ todo, onUpdate, onDelete, onStatusChange }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editDeadline, setEditDeadline] = useState(todo.deadline || DEFAULT_VALUES.EMPTY_STRING);

  const handleSave = () => {
    onUpdate(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim(),
      deadline: editDeadline || undefined,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditDeadline(todo.deadline || DEFAULT_VALUES.EMPTY_STRING);
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(DEFAULT_VALUES.LOCALE);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <div>
            <label htmlFor={`edit-title-${todo.id}`}>{LABELS.TITLE}</label>
            <input
              id={`edit-title-${todo.id}`}
              type={INPUT_TYPES.TEXT}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`edit-description-${todo.id}`}>{LABELS.DESCRIPTION}</label>
            <textarea
              id={`edit-description-${todo.id}`}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`edit-deadline-${todo.id}`}>{LABELS.DEADLINE}</label>
            <input
              id={`edit-deadline-${todo.id}`}
              type={INPUT_TYPES.DATE}
              value={editDeadline}
              onChange={(e) => setEditDeadline(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>{LABELS.SAVE}</button>
          <button onClick={handleCancel}>{LABELS.CANCEL}</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>{LABELS.ID} {todo.id}</p>
          <p>{LABELS.DESCRIPTION} {todo.description}</p>
          <p>{LABELS.STATUS} 
            <select
              value={todo.status}
              onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
            >
              <option value={TODO_STATUS.NOT_STARTED}>{TODO_STATUS.NOT_STARTED}</option>
              <option value={TODO_STATUS.IN_PROGRESS}>{TODO_STATUS.IN_PROGRESS}</option>
              <option value={TODO_STATUS.COMPLETED}>{TODO_STATUS.COMPLETED}</option>
            </select>
          </p>
          {todo.deadline && <p>{LABELS.DEADLINE} {todo.deadline}</p>}
          <p>{LABELS.SORT_BY_CREATED}: {formatDate(todo.createdAt)}</p>
          <p>{LABELS.SORT_BY_UPDATED}: {formatDate(todo.updatedAt)}</p>
          <button onClick={() => setIsEditing(true)}>{LABELS.EDIT}</button>
          <button onClick={() => onDelete(todo.id)}>{LABELS.DELETE}</button>
        </div>
      )}
    </div>
  );
};