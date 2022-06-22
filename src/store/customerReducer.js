const defaultState = {
  customers: [],
};

const addCustomer = "ADD_CUSTOMER";
const removeCustomers = "REMOVE_CUSTOMERS";
const addManyCustomers = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addManyCustomers: {
      return { ...state, customers: [...state.customers, ...action.payload] };
    }
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

export const addCustomerAction = (payload) => ({
  type: addCustomer,
  payload,
});
export const removeCustomersAction = (payload) => ({
  type: removeCustomers,
  payload,
});
export const addManyCustomerAction = (payload) => ({
  type: addManyCustomers,
  payload,
});
