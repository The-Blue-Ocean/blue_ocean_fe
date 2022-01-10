import React, { useRef, useState } from 'react'
import { Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/AuthContext'
import './Login.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/home", { replace: true });
        } catch {
            setError('Failed to Log In!')
        }

        setLoading(false)
    }

    return (
        <>
            <div id={"login-form"} className="form">
                <h3 className={"form-title"}>Login</h3>
                <div className={"form-separator"}> </div>
                <div className={"form-inner"}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control placeholder='Email' className='form-input' type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className='form-input' placeholder="Password" type="password" ref={passwordRef} required />
                        </Form.Group>
                        <button disabled={loading} className="form-submit" type="submit">Log in</button>
                    </Form>
                </div>
            </div>
            <p id={"password-prompt"} className={"form-prompt"}>
                Forgot your password? Click{" "}
                <Link className={"form-link"} to="/forgot-password">
                    here
                </Link>
            </p>
            <p id={"signup-prompt"} className={"form-prompt"}>
                Don't have an account? Signup
                <Link className={"form-link"} to="/signup">
                    here
                </Link>
            </p>
        </>
    )
}
