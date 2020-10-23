//Selectors are used to get data from Redux Store.
//Benefits: If we need to change the structure for the Redux Store
//we need to change it on one place not in every connect()
export const getHomeData = state => state.homeReducer || {};
export const usersData = state => state.usersReducer || {};
