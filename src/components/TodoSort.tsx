import type { SortOptions, SortField, SortOrder } from '../types/todo';

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
      <h3>ソート</h3>
      <div>
        <label htmlFor="sort-field">ソート項目:</label>
        <select
          id="sort-field"
          value={sort.field}
          onChange={handleFieldChange}
        >
          <option value="id">ID</option>
          <option value="deadline">期限</option>
          <option value="createdAt">作成日</option>
          <option value="updatedAt">更新日</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort-order">ソート順:</label>
        <select
          id="sort-order"
          value={sort.order}
          onChange={handleOrderChange}
        >
          <option value="asc">昇順</option>
          <option value="desc">降順</option>
        </select>
      </div>
    </div>
  );
};