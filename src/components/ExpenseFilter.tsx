import React from "react";
// To notify App.tsx when a user selects a filter.
interface Props {
  onSelectCategory: (category: string) => void;
}
//Component responsible for showing filter, the act of filtering will be done in App.tsx, which is where we maintain the state.
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
