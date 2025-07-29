import type { FilterOptions, TodoStatus } from '../types/todo';
import { LABELS, INPUT_TYPES, ELEMENT_IDS, DEFAULT_VALUES, TODO_STATUS } from '../constants/strings';

type TodoFilterProps = {
  filter: FilterOptions;
  onFilterChange: (filter: FilterOptions) => void;
}

export const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, id: e.target.value || undefined });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ 
      ...filter, 
      status: e.target.value ? e.target.value as TodoStatus : undefined 
    });
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, deadline: e.target.value || undefined });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  return (
    <div>
      <h3>{LABELS.FILTER}</h3>
      <div>
        <label htmlFor={ELEMENT_IDS.FILTER_ID}>{LABELS.ID}</label>
        <input
          id={ELEMENT_IDS.FILTER_ID}
          type={INPUT_TYPES.TEXT}
          value={filter.id || DEFAULT_VALUES.EMPTY_STRING}
          onChange={handleIdChange}
          placeholder={LABELS.SEARCH_BY_ID}
        />
      </div>
      <div>
        <label htmlFor={ELEMENT_IDS.FILTER_STATUS}>{LABELS.STATUS}</label>
        <select
          id={ELEMENT_IDS.FILTER_STATUS}
          value={filter.status || DEFAULT_VALUES.EMPTY_STRING}
          onChange={handleStatusChange}
        >
          <option value={DEFAULT_VALUES.EMPTY_STRING}>{LABELS.ALL}</option>
          <option value={TODO_STATUS.NOT_STARTED}>{TODO_STATUS.NOT_STARTED}</option>
          <option value={TODO_STATUS.IN_PROGRESS}>{TODO_STATUS.IN_PROGRESS}</option>
          <option value={TODO_STATUS.COMPLETED}>{TODO_STATUS.COMPLETED}</option>
        </select>
      </div>
      <div>
        <label htmlFor={ELEMENT_IDS.FILTER_DEADLINE}>{LABELS.DEADLINE}</label>
        <input
          id={ELEMENT_IDS.FILTER_DEADLINE}
          type={INPUT_TYPES.DATE}
          value={filter.deadline || DEFAULT_VALUES.EMPTY_STRING}
          onChange={handleDeadlineChange}
        />
      </div>
      <button onClick={clearFilters}>{LABELS.CLEAR_FILTERS}</button>
    </div>
  );
};