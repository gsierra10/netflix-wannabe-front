export const APIConsumer = {

    loginUser: async (data) => {
        try{
            let result = await fetch('http://localhost:0420/user/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data
            })
            result = await result.json()
            localStorage.setItem('token', result.data)
        } catch(data){
            console.log(data)
        }
    },

    registerUser: async (data) => {
        try{
            let result = await fetch('http://localhost:0420/user/alta',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
        })
        } catch (data){
            console.log(data)
        }
    },

    findMovie: async (data) => {
        try{
            let result = await fetch('http://localhost:0420/movie/',{
                method: "GET",
                body: data
            })
        } catch(data){
            console.log(data)
        }
    },

    findAllRents: async (data) => {
        try{
            let result = await fetch('http://localhost:0420/rent/all',{
                method: "GET",
                body: data
            })
        } catch(data){
            console.log(data)
        }
    }

}

export default APIConsumer