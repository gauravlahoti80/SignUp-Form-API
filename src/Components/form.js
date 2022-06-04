// import axios from 'axios';
import React, { Component } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Components/form.css'

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')

    function appendData() {
        console.warn(email, first_name, last_name, phone, dob, password)
        let data = { email, first_name, last_name, phone, dob, password }

        /*AXIOS Method*/
        // 'https://api.ovministries.com/v1/users/signup/'
        // axios.post('https://api.ovministries.com/v1/users/signup/', data)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    //     fetch('https://api.ovministries.com/v1/users/signup/', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((response) => {
    //         console.log(response.json())
    //         alert("SignUp successful")
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //             alert("SignUp unsuccessful")
    //         })
     }

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form_components'>
                <label>Email</label>
                <input type="email" {...register('email', { required: true })} value={email} onChange={(event) => { setEmail(event.target.value) }} />
                {errors.email && <p>Email is invalid</p>}
                <label>First Name</label>
                <input type="text" {...register('firstName', {required: true})} value={first_name} onChange={(event) => { setFirst_name(event.target.value) }} />
                {errors.firstName && <p>This is a required feild</p>}
                <label>Last Name</label>
                <input type="text" {...register('lastName' , {required: true})} value={last_name} onChange={(event) => { setLast_name(event.target.value) }} />
                {errors.lastName && <p>This is a required feild</p>}
                <label>Phone</label>
                <input type="text" {...register('phone' , {required: true, maxLength: 10, minLength: 10})} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                {errors.phone && <p>It should have 10 characters</p>}
                <label>Date of Birth</label>
                <input type="text" {...register('dob' , {required: true, })} value={dob} onChange={(event) => { setDob(event.target.value) }} />
                {errors.dob && <p>Date of Birth is invalid</p>}
                <label>Password</label>
                <input type="password" {...register('password' , {required: true, minLength: 6})} value={password} onChange={(event) => { setPassword(event.target.value) }} />
                {errors.password && <p>Password should be minimum of 6 characters</p>}
                <button type='submit' id='submit' onClick={appendData}>Submit</button>
            </div>
        </form>
    )
}
export default Form;