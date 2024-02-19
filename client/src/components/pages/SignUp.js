import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Layout from '../layout/Layout'
import './css/signup.css'
import {useDispatch} from "react-redux"
import {sendData} from "../../store/slices/signup"

const SignUp = () => {

    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs({...inputs, [name]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = await dispatch(sendData(inputs))
        // console.log("-data-", data)

        if (data?.payload && data?.payload?.success)
        {
            navigate('/')

        } else if (data?.payload?.success === false && data?.payload?.message)
        {
            navigate('/login')
        }
    }


    return (
        <Layout>
            <div id="container">

                <div id="dictionary-container">English <br />Dictionary
                </div>

                <div id="signup-container">
                    <h1>Search any English word</h1>
                    <h3>Join today.</h3>
                    <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Your Name" />
                    <input type="username" name="username" value={inputs.username} onChange={handleChange} placeholder="Set Username" />
                    <input type="password" name="password" value={inputs.password} onChange={handleChange} placeholder="Set Password" />
                    <button id="create-account" type="button" onClick={handleSubmit}>Create account</button>
                    <p>Already have an account?</p>
                    <Link to="/login"><button id="sign-in" type="button">Sign In</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp