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
		case 'UPDATE_ROLE':
			const matchedRole = state.roles.find(r => r.id === action.selectedRole.id)
			const index = state.roles.indexOf(matchedRole)
			return {selectedRole: action.selectedRole,roles: [...state.roles.slice(0,index),action.selectedRole,...state.roles.slice(index + 1)]}
		case 'ADD_ROLE':
			alert("Role was added succesfully!")
			return {...state,roles: action.role}
		default:
			return state
	}
}
