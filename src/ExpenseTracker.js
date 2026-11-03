import { useState } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
    const [expense, setExpense] = useState("");
    const [price, setPrice] = useState("");
    const [expenses, setExpenses] = useState([]);

    const total = expenses.reduce((sum, expense) => {
        return sum + expense.price;
    }, 0);

    return (
        <div className="expense-page">

            {/* HEADER */}
            <header className="expense-header">
                <div>
                    <p className="brand">PERSONAL FINANCE</p>
                    <h1>Expense Tracker</h1>
                    <p className="subtitle">
                        Keep track of your spending
                    </p>
                </div>

                <div className="total-box">
                    <span>Total Spent</span>
                    <strong>${total.toFixed(2)}</strong>
                </div>
            </header>


            {/* ADD EXPENSE */}
            <section className="expense-form">

                <div className="form-title">
                    <h2>Add Expense</h2>
                    <p>Enter a new expense below</p>
                </div>

                <div className="form-row">

                    <div className="input-group">
                        <label>Expense</label>

                        <input
                            type="text"
                            placeholder="e.g. Groceries"
                            value={expense}
                            onChange={(e) =>
                                setExpense(e.target.value)
                            }
                        />
                    </div>


                    <div className="input-group">
                        <label>Price</label>

                        <input
                            type="number"
                            placeholder="0.00"
                            value={price}
                            onChange={(e) =>
                                setPrice(e.target.value)
                            }
                        />
                    </div>


                    <button
                        className="add-button"
                        onClick={() => {

                            if (
                                expense.trim() === "" ||
                                price === ""
                            ) {
                                return;
                            }

                            setExpenses([
                                ...expenses,
                                {
                                    name: expense,
                                    price: Number(price)
                                }
                            ]);

                            setExpense("");
                            setPrice("");
                        }}
                    >
                        + Add Expense
                    </button>

                </div>

            </section>


            {/* EXPENSE LIST */}
            <section className="expense-list-section">

                <div className="list-header">
                    <div>
                        <p className="section-label">
                            TRANSACTIONS
                        </p>

                        <h2>
                            Your Expenses
                        </h2>
                    </div>

                    <button
                        className="reset-button"
                        onClick={() => setExpenses([])}
                    >
                        Reset
                    </button>
                </div>


                {expenses.length === 0 ? (

                    <div className="empty-state">
                        <div className="empty-icon">
                            $
                        </div>

                        <h3>No expenses yet</h3>

                        <p>
                            Add your first expense to start
                            tracking your spending.
                        </p>
                    </div>

                ) : (

                    <div className="expense-list">

                        {expenses.map((expense, index) => (

                            <div
                                className="expense-item"
                                key={index}
                            >

                                <div className="expense-info">

                                    <div className="expense-icon">
                                        $
                                    </div>

                                    <div>
                                        <strong>
                                            {expense.name}
                                        </strong>

                                        <span>
                                            Expense #{index + 1}
                                        </span>
                                    </div>

                                </div>


                                <div className="expense-right">

                                    <strong className="expense-price">
                                        ${expense.price.toFixed(2)}
                                    </strong>

                                    <button
                                        className="delete-button"
                                        onClick={() => {

                                            setExpenses(
                                                expenses.filter(
                                                    (_, i) =>
                                                        i !== index
                                                )
                                            );

                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}

export default ExpenseTracker;