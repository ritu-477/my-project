import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const MailContactUs = () => {
    const [formValue, setFormValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const SERVICE_ID = 'service_j4as2yz'
    const TEMPLATE_ID = 'template_d2iofkh'
    const USER_ID = 'kG81wbOUi5emNDkAw'

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValue({ firstname: '', lastname: '', email: '', password: '' })
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formValue, USER_ID)
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input
                    type='text'
                    value={formValue.firstname}
                    required
                    onChange={(e) =>
                        setFormValue({ ...formValue, firstname: e.target.value })
                    }
                    placeholder='First Name'
                    className='text-black border border-black px-3 py-2 outline-none rounded-lg'
                />
                <input
                    type='text'
                    required
                    value={formValue.lastname}
                    onChange={(e) =>
                        setFormValue({ ...formValue, lastname: e.target.value })
                    }
                    placeholder='Last Name'
                    className='text-black border border-black px-3 py-2 outline-none rounded-lg'
                />
                <input
                    type='email'
                    value={formValue.email}
                    required
                    onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                    placeholder='Email'
                    className='text-black border border-black px-3 py-2 outline-none rounded-lg'
                />
                <input
                    type='password'
                    value={formValue.password}
                    required
                    onChange={(e) =>
                        setFormValue({ ...formValue, password: e.target.value })
                    }
                    placeholder='Password'
                    className='text-black border border-black px-3 py-2 outline-none rounded-lg'
                />
                <button
                    type='submit'
                    className='px-6 py-2 w-full bg-black mx-auto text-white rounded-lg'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default MailContactUs