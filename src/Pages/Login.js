import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {



    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "admin", password: "12345" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }
    }

    return (
        <>
            <div className='Login_formcontainer col-xl-6 col-12'>

                <Form onSubmit={handleSubmit}>
                    <Form.Label>User-Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="Username" className='py-3'
                        value={username}
                        onChange={(e) => setusername(e.target.value)} />
                         <div className="pt-4">
                         <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" placeholder="Enter password"
                        name="Password"
                        onChange={(e) => setpassword(e.target.value)}
                        className='py-3'
                    />
                         </div>
                    <Button type='submit' className='w-100 py-3 mt-3 fs-5 fw-bold'>Login</Button>
                </Form>

            </div>
        </>
    );
}

export default Login;