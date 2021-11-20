export const APIConsumer = {

loginUser: async (data) => {
    try{
        let result = await fetch('http://localhost:0420/user/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        result = result.json()
        localStorage.setItem('token', result)
    } catch(data){
        console.log(data)
    }
    },

registerUser: async (data) => {
    try{
        let result = await fetch('http://localhost:0420/user/register', {
        method: "POST",
        body: data
        })
    } catch (data){
        console.log(data)
    }
    },

searchMovie: async (data) => {
    try{
        let result = await fetch('',{
            method: "GET",
            body: data
        })
    } catch(data){
        console.log(data)
    }
    },

}

export default APIConsumer