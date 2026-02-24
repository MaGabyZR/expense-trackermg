import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  //Implemet filtering.
  const [selectedCategory, setSelectedCategory] = useState("");
  //dummy data just to test.
  const [expenses, setExpenses] = useState([
    { id: 1, description: "xxx", amount: 12, category: "Utilities" },
    { id: 2, description: "ccc", amount: 12, category: "Groceries" },
    { id: 3, description: "ddd", amount: 12, category: "Utilities" },
    { id: 4, description: "jjj", amount: 12, category: "Entertainment" },
  ]);

  //Pass only the filtered list to the ExpenseList expenses. expenses holds all the expenses,
  // visibleExpenses holds only the expenses the user is going to see based on the selected filter, if he selected one.
  //You don´t need another state variable, you can use the existing state variables to calculate this.
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
