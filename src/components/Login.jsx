import http from "@/services/httpService";
import { useState } from "react";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const getUser = async () => {
        try {
            const { data } = await http.post("/auth/login", { email: name, password: password })
            console.log(data);
            //document.cookie = `refreshToken = ${data.refresh_token}`;
            //document.cookie = `accessToken = ${data.access_token}`;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input className="border-red-500 border" type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
            <input className="border-red-500 border" type="text" name="" id="" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => getUser()}>send</button>
        </div>
    )
}

export default Login