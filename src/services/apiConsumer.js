export const APIConsumer = {

    loginUser: async (data) =>{
        try{
            let result = await fetch('http://localhost:0420/user/login',{
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

    // getMovies: async (text) => {
    //     const result = await fetch('http://localhost:3000/api/movie/?title=${text}', {
    //         method: "GET"
    //     })
    //     return result
    // },

    // saveMovie:async (movie) => {
    //     const result = await fetch('http://localhost:3000/api/movie/', {
    //         method: "POST",
    //         body:{
    //             movie
    //         }
    //     })
    //     return result
    // },
}

export default APIConsumer