import axios from 'axios'


export default function UserRegister(params){
    axios.post("https://login-signup.p.rapidapi.com/public/v1/signup.php", params).then(e=>
        {
            if(e.status=201){
                window.location.replace("/login")
            }
        }).catch(error =>{
            if(error.response.data.startsWith("E11000")) alert ("this email already registred !!")
        })
}
export function UserLogin(params){
    axios.post("https://login-signup.p.rapidapi.com/public/v1/login.php", params
    ).then().catch()
}
export async function GetTodos(params)
{
    let data = await axios.get("https://api-nodejs-todolist.herokuapp.com/task")
    return data
}
