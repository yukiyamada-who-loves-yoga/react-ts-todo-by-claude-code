import type { SortOptions, SortField, SortOrder } from '../types/todo';
import { LABELS, ELEMENT_IDS, SORT_FIELDS } from '../constants/strings';

type TodoSortProps = {
  sort: SortOptions;
  onSortChange: (sort: SortOptions) => void;
}

export const TodoSort = ({ sort, onSortChange }: TodoSortProps) => {
  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange({ ...sort, field: e.target.value as SortField });
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange({ ...sort, order: e.target.value as SortOrder });
  };

  return (
    <div>
      <h3>{LABELS.SORT}</h3>
      <div>
        <label htmlFor={ELEMENT_IDS.SORT_FIELD}>{LABELS.SORT_FIELD}</label>
        <select
          id={ELEMENT_IDS.SORT_FIELD}
          value={sort.field}
          onChange={handleFieldChange}
        >
          <option value={SORT_FIELDS.ID}>{LABELS.SORT_BY_ID}</option>
          <option value={SORT_FIELDS.DEADLINE}>{LABELS.SORT_BY_DEADLINE}</option>
          <option value={SORT_FIELDS.CREATED_AT}>{LABELS.SORT_BY_CREATED}</option>
          <option value={SORT_FIELDS.UPDATED_AT}>{LABELS.SORT_BY_UPDATED}</option>
        </select>
      </div>
      <div>
        <label htmlFor={ELEMENT_IDS.SORT_ORDER}>{LABELS.SORT_ORDER}</label>
        <select
          id={ELEMENT_IDS.SORT_ORDER}
          value={sort.order}
          onChange={handleOrderChange}
        >
          <option value="asc">{LABELS.ASCENDING}</option>
          <option value="desc">{LABELS.DESCENDING}</option>
        </select>
      </div>
    </div>
  );
};