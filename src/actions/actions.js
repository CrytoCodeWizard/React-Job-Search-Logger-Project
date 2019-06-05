export const setRolesAction = roles => {
	return {type: "SET_ROLES",roles: roles}
}

export const setRoleAction = role => {
	return {type: "SET_ROLE",selectedRole: role}
}

export const updateRoleAction = role => {
	return {type: "UPDATE_ROLE",selectedRole: role}
}

// ************

export const getRoles = () => {
	return dispatch => {
		return fetch("http://localhost:3001/api/roles")
			.then(resp => resp.json())
			.then(roles => dispatch(setRolesAction(roles)))
	}
}

export const selectRole = (role) => {
	return dispatch => {
		return dispatch(setRoleAction(role))
	}
}

export const updateRole = (selectedRole,newValue) => {
	return dispatch => {
		const updatedRole = {
			...selectedRole,
			status: newValue
		}
		// console.log(">>>>1 updatedRole:  ",updatedRole)
		//=>the selectedRole
		return dispatch(updateRoleAction(updatedRole))
	}
}

