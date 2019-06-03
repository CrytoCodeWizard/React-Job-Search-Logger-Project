export const setRoles = roles => {
	return {type: "SET_ROLES",roles: roles}
}

export const setRole = role => {
	return {type: "SET_ROLE",selectedRole: role}
}

export const getRoles = () => {
	return dispatch => {
		return fetch("http://localhost:3001/api/roles")
			.then(resp => resp.json())
			.then(roles => dispatch(setRoles(roles)))
	}
}

export const selectRole = (event,role) => {
	event.preventDefault()
	return dispatch => {
		return dispatch(setRole(role))
	}
}