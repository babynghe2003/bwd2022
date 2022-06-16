const signin = async (user) => {
    try {
        let response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user) 
        })
        return await response.json()
    } catch (error) {
        console.log(error)        
    }
}

export {
    signin
}