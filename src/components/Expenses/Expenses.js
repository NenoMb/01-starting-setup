import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenesesList from "./ExpenseList";
import ExpenesesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFIlteredYear] = useState("2020");
  let filterInfoText = "2019,2021 & 2022";
  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });



  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020, & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }



  const filterChangeHandler = (selectedYear) => {
    setFIlteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenesesChart expenses={filteredItems} />
        <ExpenesesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
