import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const URL = 'https://api.bybits.co.uk/auth/token'
  const CONFIG = {
    headers: {
      environment: 'mock'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      username: email,
      password,
      type: 'USER_PASSWORD_AUTH'
    }
    try {
      const response = await axios.post(URL, data, CONFIG)
      if (response) {
        localStorage.setItem('token', response.data.access_token)
        navigate('/policy')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>Log in.</div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your Email Address"
          type="email"
          required
        ></input>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Your Password"
          type="password"
          required
        ></input>
        <button type="submit">Log in</button>
      </form>
    </>
  )
}

export default Login
