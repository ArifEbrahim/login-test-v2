import { useState } from 'react'
import Heading from '../Heading'
import Button from '../Button'
import { PiSignInBold } from 'react-icons/pi'
import styles from './LoginForm.module.css'
import { LoginFormProps } from '../../types/Login'

function LoginForm({ callAPI }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    callAPI({ email, password })
  }

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-content']}>
        <form onSubmit={handleSubmit}>
          <Heading text="Log in." />
          <input
            placeholder="your email address"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <input
            placeholder="your password"
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
          <Button type="submit">
            <span>log in</span>
            <PiSignInBold size={'1.4em'} />
          </Button>
        </form>
      </div>
    </div>
  )
}
export default LoginForm