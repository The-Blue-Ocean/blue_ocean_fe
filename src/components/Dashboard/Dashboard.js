import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [data, setData] = useState('')
    const { currentUser, logout } = useAuth()

    const navigate = useNavigate();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/login", { replace: true });
        } catch {
            setError('Failed to log out!')
        }
    }

    useEffect(() => {
        fetchDataTest()
    }, []);

    useEffect(() => {
        if (!token) {
            currentUser.getIdToken().then(
                function (idToken) {
                    setToken(idToken)
                }
            )
        }
    });

    // console.log(token)

    const fetchDataTest = async () => {
        const res = await axios.get('https://blue-ocean-be.uc.r.appspot.com/api/students');
        return setData(res.data)
        // return res.data
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Admin Dashboard</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="update-profile" className='btn btn-danger w-100 mt-3'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}