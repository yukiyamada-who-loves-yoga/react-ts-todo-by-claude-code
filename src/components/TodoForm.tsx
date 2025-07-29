import { useState } from 'react';
import { LABELS, INPUT_TYPES, ELEMENT_IDS, DEFAULT_VALUES } from '../constants/strings';

type TodoFormProps = {
  onAdd: (title: string, description: string, deadline?: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState(DEFAULT_VALUES.EMPTY_STRING);
  const [description, setDescription] = useState(DEFAULT_VALUES.EMPTY_STRING);
  const [deadline, setDeadline] = useState(DEFAULT_VALUES.EMPTY_STRING);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim(), deadline || undefined);
      setTitle(DEFAULT_VALUES.EMPTY_STRING);
      setDescription(DEFAULT_VALUES.EMPTY_STRING);
      setDeadline(DEFAULT_VALUES.EMPTY_STRING);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={ELEMENT_IDS.TITLE}>{LABELS.TITLE}</label>
        <input
          id={ELEMENT_IDS.TITLE}
          type={INPUT_TYPES.TEXT}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor={ELEMENT_IDS.DESCRIPTION}>{LABELS.DESCRIPTION}</label>
        <textarea
          id={ELEMENT_IDS.DESCRIPTION}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={ELEMENT_IDS.DEADLINE}>{LABELS.DEADLINE}</label>
        <input
          id={ELEMENT_IDS.DEADLINE}
          type={INPUT_TYPES.DATE}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type={INPUT_TYPES.SUBMIT}>{LABELS.ADD_TODO}</button>
    </form>
  );
};