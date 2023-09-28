
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
        
export const UserRegisterPage = () => {
    const [value, setValue] = useState('')
    return (
        <>
        <div className="flex">
            <div className="max-w-xs">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" className="max-w-xs" value={value} onChange={(e) => setValue(e.target.value)}/>
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </div>
        </>
    )
}