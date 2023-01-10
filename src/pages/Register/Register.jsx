import React from 'react'
import Button from '../../components/atom/Button/Button';
import Input from '../../components/atom/Input/Input';
import '../Register/regis.scss'

const Register = () => {
    return (
        <div className='wrapper'>
            <div className='left'>
                <div className='regis-bg'/>
            </div>
            <div className='right'>
                <p className='title'>Register</p>
                <Input label='Full Name' placeholder='Full Name'/>
                <Input label='Email' type='email' placeholder='Email'/>
                <Input label='Password' type='password' placeholder='Password'/>
                <Button title='Register'/>
            </div>
        </div>
    )
}

export default Register;