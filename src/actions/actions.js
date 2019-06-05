export const setRolesAction = roles => {
	return {type: "SET_ROLES",roles: roles}
}

export const setRoleAction = role => {
	return {type: "SET_ROLE",selectedRole: role}
}

export const updateRoleAction = role => {
	return {type: "UPDATE_ROLE",selectedRole: role}
}

export const addRoleAction = role => {
	return {type: "ADD_ROLE",role: role}
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

export const addRole = (role) => {
	return dispatch => {
		fetch('http://localhost:3001/api/roles',{
			method: 'POST',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(role)
		})
			.then(resp => resp.json())
			.then(role => dispatch(addRoleAction(role)))
	}
}


// I also need to change the roles array in state to replace the old role with the updated role.
// I will need to update the state in the reducer
	// -- can I do it at the same time I process the slectedRole change or does this need to be a separate action/reducer?
//  I will also need to fetch and PATCH the updated role to persist
// -- This PATCH should fetch to api/roles/:id rather than api/roles