import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { TodoSort } from './components/TodoSort';
import { STYLES } from './constants/strings';

function App() {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    updateStatus,
    filter,
    setFilter,
    sort,
    setSort,
  } = useTodos();

  return (
    <div>
      <h1>TODOリスト</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <div style={STYLES.FLEX_CONTAINER}>
        <TodoFilter filter={filter} onFilterChange={setFilter} />
        <TodoSort sort={sort} onSortChange={setSort} />
      </div>
      
      <div>
        <h2>TODO一覧 ({todos.length}件)</h2>
        {todos.length === 0 ? (
          <p>TODOがありません</p>
        ) : (
          todos.map(todo => (
            <div key={todo.id} style={STYLES.TODO_ITEM}>
              <TodoItem
                todo={todo}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
                onStatusChange={updateStatus}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
