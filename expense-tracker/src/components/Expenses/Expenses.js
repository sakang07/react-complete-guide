import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseseList items={filteredExpenses} />

        {/* 2. && 사용하여 조건부 렌더링 */}
        {/* 앞의 조건을 만족할 경우 && 뒤의 조건이 출력된다 */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))} */}

        {/* 2. 삼항연산자 사용하여 조건부 렌더링 */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
