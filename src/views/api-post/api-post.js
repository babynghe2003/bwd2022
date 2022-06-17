const create = async (params, credentials, post) => {
    try {
        let response = await fetch('http://localhost:3001/api/question/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
                'Access-Control-Allow-Headers': '*'
            },
            body: post,
            params: params
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
} 

const read = async (signal) => {
    try {
        let response = await fetch('http://localhost:3001/api/question/', {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}


export {
    create,
    read
}