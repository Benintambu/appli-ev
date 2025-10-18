import { useState } from "react"

export default function Input({ type = "text", value, onChange, placeholder, className, id, id_i }) {

    const showPassword = () => {
        const passwordInput = document.getElementById('user-password');
        const showbtn = document.querySelector('#show-password');

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showbtn.className = 'bxr  bx-eye-slash'
        } else {
            passwordInput.type = "password";
            showbtn.className = 'bxr  bx-eye'
        }
    }

    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} onChange={onChange} className={className} id={id} />
            {type === "password" && <i className='bxr  bx-eye' id={id_i} onClick={showPassword} ></i>}
        </div>
    )
}