import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import Socials from '../components/Socials';
import contactVideo from '../videos/contact.mp4'
import { send } from '@emailjs/browser';

const Contact = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [useremail, setUseremail] = useState('');

    const HandleForm = (e) => {
        e.preventDefault();
        send(
            'service_6c09lah',
            'template_0wki7yg',
            {username, message, useremail},
            'DFfU6nD-YpIx8JyA7'
        ).then(response => {
            alert("Email recieved, you will recieve a confirmation email")
        }).catch(err => {
            alert("Email failed to send, please try again")
        })
        setUsername('')
        setMessage('')
        setUseremail('')
    }
    return (
        <div className='contact'>
            <video src={contactVideo} className='video' autoPlay loop muted/>
            <Navigation/>
            <div className='overlay'></div>
            <div className='contact-content'>
                <form className="form">
                    <input 
                        type='text' 
                        required
                        name="username"
                        value={username}
                        placeholder="Enter your name..."
                        onChange={e => {
                            setUsername(e.target.value);
                        }}/>
                    <textarea 
                        name='message' 
                        required
                        value={message}
                        placeholder='Message'
                        onChange={e => {
                            setMessage(e.target.value);
                        }}/>
                    <input 
                        type='email' 
                        name="useremail"
                        required
                        value={useremail}
                        placeholder="Enter your email..."
                        onChange={e => {
                            setUseremail(e.target.value);
                        }}/>
                    <div className="send">
                        <button 
                            type="submit"
                            onClick={HandleForm}>Send</button>
                    </div>
                </form>
                <Socials/>
            </div>
        </div>
    )
}

export default Contact;