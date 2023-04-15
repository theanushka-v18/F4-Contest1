import { useState } from "react";

const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(name && email && password && confirmPassword) {
            if(password === confirmPassword) {
                alert("Signedup Successfully")
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            } else {
                alert("Password and confirmation Password doesn't not match");
            }
        } else {
            alert("All the fields are mandatory")
        }

    }

    return (
        <>
            <form className="App-header hgt">
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}  />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </>
    );
}

export default SignupForm;
