
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const Dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 2, 23),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 4, 22),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 7, 21),
  },
];



function App() {

  const [expenses, setExpenses]=useState(Dummyexpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevexpenses)=>{
      return [expense, ...prevexpenses]
    });
    //it also working but we are function for updating previous data also
    // setExpenses([expense, ...expenses]);
    // console.log([expense, ...expenses]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpenseHandler={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}
export default App;
