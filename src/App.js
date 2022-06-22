import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncAction/customers";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  removeCustomersAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCust = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCust = (customer) => {
    dispatch(removeCustomersAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "100px" }}>{cash}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCust(prompt())}>Добавить Клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((cust) => (
            <div onClick={() => removeCust(cust)} style={{ fontSize: "50px" }}>
              {cust.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "50px" }}>Клиентов нет</div>
      )}
    </div>
  );
}

export default App;
