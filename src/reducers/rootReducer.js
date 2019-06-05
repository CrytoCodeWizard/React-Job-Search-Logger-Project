const initialState = {
	roles: [],
	selectedRole: null
}
export default (state = initialState,action) => {
	switch(action.type) {
		case "SET_ROLES":
			return {...state,roles: action.roles}
		case "SET_ROLE":
			return {...state,selectedRole: action.selectedRole}
		// case 'UPDATE_ROLE':
		// const X = map/filter roles to find matching id to selectedRole to get new array
		// return {...state,selectedRole: action.selectedRole, roles: X}
		case 'ADD_ROLE':
			return {...state,roles: action.role}
		default:
			return state
	}
}
