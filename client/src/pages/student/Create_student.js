import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create_student } from '../../actions/studentAction';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css' 

const Signup = () => {

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [date_of_birth, setDate_of_birthe] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [favorite_sport, setFavorite_sport] = useState("");
    const [errors, setErrors] = useState({});


    const dispatch = useDispatch();

    const signupHandeler = async (e) => {
        e.preventDefault();
        const data = await dispatch(create_student({first_name, last_name, date_of_birth, email, phone, favorite_sport}));
        
        setErrors(data)

    }
    return (
        <form className='signup'>
            <input type="text" placeholder='first name' value={first_name} 
            onChange={e => setFirst_name(e.target.value)}/>
            <input type="text" placeholder='last name' value={last_name}
            onChange={e => setLast_name(e.target.value)}/>
            <input type="date" placeholder='Date of Birth' value={date_of_birth}
            onChange={e => setDate_of_birthe(e.target.value)}/>
            <input type="email" placeholder='Email Address' value={email}
            onChange={e => setEmail(e.target.value)}/>
            <PhoneInput
            country={'am'}
            value={phone}
            onChange = {(phone) => setPhone(phone)}
            />
            <input type="text" placeholder='Favorite sports' value={favorite_sport}
            onChange={e => setFavorite_sport(e.target.value)}/>
            <button onClick={signupHandeler}
            disabled={!(first_name.length >= 2 && last_name.length >= 2 && date_of_birth && phone.length >= 8 && favorite_sport.length >= 2 && email.includes("@") && email.includes(".") )}
            >create student</button>
            
            
            {Object.keys(errors).length >= 1 ?(
                    <>
                        <div style={{ color: "red" }}>
                            <p>{errors.email && errors.email[0]}</p>
                            <p>{errors.phone && errors.phone[0]}</p>
                            <p>{errors.first_name && errors.first_name[0]}</p>
                            <p>{errors.last_name && errors.last_name[0]}</p>
                            <p>{errors.date_of_birth && errors.date_of_birth[0]}</p>
                            <p>{errors.favorite_sport && errors.favorite_sport[0]}</p>
                        </div>
                    </>
            ):(
                <>
                </>
            )}
        </form>
    );
}

export default Signup;
