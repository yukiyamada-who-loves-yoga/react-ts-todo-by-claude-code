import { useState } from 'react';
import type { Todo, TodoStatus } from '../types/todo';

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
  const [editDeadline, setEditDeadline] = useState(todo.deadline || '');

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
    setEditDeadline(todo.deadline || '');
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ja-JP');
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <div>
            <label htmlFor={`edit-title-${todo.id}`}>タイトル:</label>
            <input
              id={`edit-title-${todo.id}`}
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`edit-description-${todo.id}`}>詳細:</label>
            <textarea
              id={`edit-description-${todo.id}`}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`edit-deadline-${todo.id}`}>期限:</label>
            <input
              id={`edit-deadline-${todo.id}`}
              type="date"
              value={editDeadline}
              onChange={(e) => setEditDeadline(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>保存</button>
          <button onClick={handleCancel}>キャンセル</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>ID: {todo.id}</p>
          <p>詳細: {todo.description}</p>
          <p>ステータス: 
            <select
              value={todo.status}
              onChange={(e) => onStatusChange(todo.id, e.target.value as TodoStatus)}
            >
              <option value="未着手">未着手</option>
              <option value="進行中">進行中</option>
              <option value="完了">完了</option>
            </select>
          </p>
          {todo.deadline && <p>期限: {todo.deadline}</p>}
          <p>作成日: {formatDate(todo.createdAt)}</p>
          <p>更新日: {formatDate(todo.updatedAt)}</p>
          <button onClick={() => setIsEditing(true)}>編集</button>
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </div>
      )}
    </div>
  );
};