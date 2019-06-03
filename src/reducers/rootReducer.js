const initialState = {
	roles: [],
	selectedRole: null
}
export default (state = initialState,action) => {
	switch(action.type) {
		case "SET_ROLES":
			return action.roles
		default:
			return state
	}
}