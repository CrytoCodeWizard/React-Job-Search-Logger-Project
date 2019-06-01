export const setRoles = roles => {
  return { type: "SET_ROLES", roles: roles }
}

// async
export const getRoles = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/roles")
      .then(resp => resp.json())
      .then(roles => dispatch(setRoles(roles)))
  }
}