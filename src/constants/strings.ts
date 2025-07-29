// Todo status constants
export const TODO_STATUS = {
  NOT_STARTED: '未着手',
  IN_PROGRESS: '進行中',
  COMPLETED: '完了'
} as const;

// Sort field constants
export const SORT_FIELDS = {
  ID: 'id',
  DEADLINE: 'deadline',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt'
} as const;

// Sort order constants
export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc'
} as const;

// UI Labels
export const LABELS = {
  // Form labels
  TITLE: 'タイトル:',
  DESCRIPTION: '詳細:',
  DEADLINE: '期限:',
  ID: 'ID:',
  STATUS: 'ステータス:',
  
  // Buttons
  ADD_TODO: 'TODO追加',
  EDIT: '編集',
  DELETE: '削除',
  SAVE: '保存',
  CANCEL: 'キャンセル',
  CLEAR_FILTERS: 'フィルタークリア',
  
  // Headings
  FILTER: '絞り込み',
  SORT: 'ソート',
  SORT_FIELD: 'ソート項目:',
  SORT_ORDER: 'ソート順:',
  
  // Options
  ALL: '全て',
  ASCENDING: '昇順',
  DESCENDING: '降順',
  
  // Sort field labels
  SORT_BY_ID: 'ID',
  SORT_BY_DEADLINE: '期限',
  SORT_BY_CREATED: '作成日',
  SORT_BY_UPDATED: '更新日',
  
  // Form placeholders
  SEARCH_BY_ID: 'IDで検索'
} as const;

// HTML input types
export const INPUT_TYPES = {
  TEXT: 'text',
  DATE: 'date',
  SUBMIT: 'submit'
} as const;

// HTML element IDs
export const ELEMENT_IDS = {
  // Form fields
  TITLE: 'title',
  DESCRIPTION: 'description',
  DEADLINE: 'deadline',
  
  // Filter fields
  FILTER_ID: 'filter-id',
  FILTER_STATUS: 'filter-status',
  FILTER_DEADLINE: 'filter-deadline',
  
  // Sort fields
  SORT_FIELD: 'sort-field',
  SORT_ORDER: 'sort-order'
} as const;

// Default values
export const DEFAULT_VALUES = {
  EMPTY_STRING: '',
  LOCALE: 'ja-JP'
};

// CSS styles
export const STYLES = {
  FLEX_CONTAINER: { display: 'flex', gap: '20px', margin: '20px 0' },
  TODO_ITEM: { border: '1px solid #ccc', margin: '10px 0', padding: '10px' }
} as const;