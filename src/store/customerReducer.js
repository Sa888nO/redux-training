const defaultState = {
  customers: [],
};

const addCustomer = "ADD_CUSTOMER";
const removeCustomers = "REMOVE_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addCustomer:
      return { ...state, customers: [...state.customers, action.payload] };
    case removeCustomers:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (customer) => ({
  type: addCustomer,
  payload: customer,
});
export const removeCustomersAction = (customer) => ({
  type: removeCustomers,
  payload: customer,
});
