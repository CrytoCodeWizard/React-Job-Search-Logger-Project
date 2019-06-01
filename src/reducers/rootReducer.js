export default (state = [],action) => {
	switch(action.type) {
		case "SET_ROLES":
			return action.roles
		default:
			return state
	}
}