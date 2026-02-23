import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  //dummy data just to test.
  const [expenses, setExpenses] = useState([
    { id: 1, description: "xxx", amount: 12, category: "art" },
    { id: 2, description: "ccc", amount: 12, category: "art" },
    { id: 3, description: "ddd", amount: 12, category: "art" },
    { id: 4, description: "jjj", amount: 12, category: "art" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
