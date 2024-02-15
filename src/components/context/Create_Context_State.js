import React, { useEffect, useState } from 'react'
import CreateContext from './Create_Context'
import { useNavigate } from 'react-router-dom';

function CreateContextState(props) {
    const [AuthData, usersetdata] = useState([]);
    const [IsLogin, SetIsLogin] = useState(false)
    const [IsLoader, SetIsLoader] = useState(false);
    const navigate = useNavigate();
    const userdataget = async () => {
        const token = localStorage.getItem('token');
        try {
            SetIsLoader(true)
            const res = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (res.status === 200) {
                const data = await res.json();
                usersetdata(data)
                SetIsLogin(true);
                SetIsLoader(false)

            } else {
                navigate('/user/login')
                SetIsLoader(false)
                SetIsLogin(false);
            }


        } catch (error) {
            SetIsLoader(false)
            SetIsLogin(false);
        }

    }
    useEffect(() => {
        userdataget();

    }, [])
    return (
        <>
            <CreateContext.Provider value={[AuthData, IsLogin]}>
                {props.children}
            </CreateContext.Provider>

        </>
    )
}

export default CreateContextState
