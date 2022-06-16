const create = async (user) => {
    try {
        let response = await fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const read = async (params, credentials, signal) => {
    try {
        console.log(params.user.user_id + "params")
        let response = await fetch(`http://localhost:3001/api/user/${params.user.user_id}`, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }  
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    create,
    read
}