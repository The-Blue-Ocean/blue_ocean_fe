import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/AuthContext'

import { fetchData } from '../../services/fetchAPI'

export default function Dashboard() {
    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    const { currentUser, logout } = useAuth()

    const navigate = useNavigate();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/", { replace: true });
        } catch {
            setError('Failed to log out!')
        }
    }

    useEffect(() => {
        if (!token) {
            currentUser.getIdToken().then(
                function (idToken) {
                    setToken(idToken)
                }
            ).then(
                fetchData(token, currentUser.email).then(data => setData(data)).then(() => setLoading(false))
            )
        }
    }, []);

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
            <Card>
                {!data ? <p>Loading...</p>
                    : data.map((item) => {
                        return (
                            <Card.Body className="card-body border m-3" key={item._id}>
                                <p>Name: {item.name}</p>
                                <p>Rank: {item.rank}</p>
                                <p>Admin: {item.isAdmin.toString()}</p>
                                <p>Email: {item.email}</p>
                                <p>Username: {item.username}</p>
                            </Card.Body>
                        )
                    })}
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}