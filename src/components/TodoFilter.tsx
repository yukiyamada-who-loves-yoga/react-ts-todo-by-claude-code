import type { FilterOptions, TodoStatus } from '../types/todo';

interface TodoFilterProps {
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
      <h3>絞り込み</h3>
      <div>
        <label htmlFor="filter-id">ID:</label>
        <input
          id="filter-id"
          type="text"
          value={filter.id || ''}
          onChange={handleIdChange}
          placeholder="IDで検索"
        />
      </div>
      <div>
        <label htmlFor="filter-status">ステータス:</label>
        <select
          id="filter-status"
          value={filter.status || ''}
          onChange={handleStatusChange}
        >
          <option value="">全て</option>
          <option value="未着手">未着手</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter-deadline">期限:</label>
        <input
          id="filter-deadline"
          type="date"
          value={filter.deadline || ''}
          onChange={handleDeadlineChange}
        />
      </div>
      <button onClick={clearFilters}>フィルタークリア</button>
    </div>
  );
};