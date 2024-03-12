import React, {useState} from "react";

const Greeting = () => {
    const [value , setValue] = useState("");

    const handleChange = (e) => {
          setValue(e.target.value)
    }

    return (
        <div>
            <label htmlFor="name">Enter your name : </label>
            <input type="text" id='name' onChange={handleChange}></input>
            {value ? <p>Hello {value}!</p> : null}
        </div>
    )
}

export default Greeting;