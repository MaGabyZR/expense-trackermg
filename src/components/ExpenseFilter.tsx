import React from "react";
import { categories } from "../App";

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
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
