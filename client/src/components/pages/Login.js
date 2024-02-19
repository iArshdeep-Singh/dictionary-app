import {Link, useNavigate} from "react-router-dom"
import Layout from "../layout/Layout"
import {useSelector, useDispatch} from 'react-redux'
import {updateFormData, loginData} from '../../store/slices/login'
import './css/login.css'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {formData} = useSelector((state) => state.login)
    // console.log(formData, "Y")


    const handleChange = (event) => {
        const {name, value} = event.target

        dispatch(updateFormData({[name]: value}))
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = await dispatch(loginData(formData))
        // console.log(data, "Z")

        if (data.payload.success === true)
        {
            navigate('/')
        } else if (data.payload.success === false && data.payload.message)
        {
            navigate('/signup')
        }

    }


    return (
        <Layout>
            <div id="container-i">
                <div id="sign">Sign In</div>

                <div id="signin-box">
                    <input type="username" placeholder="Username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button id="sign-in-button" type="button" onClick={handleSubmit}>Sign in</button>
                    <p id="dont">Don't have an account?</p>
                    <Link to="/signup"><button id="create-account-button">Sign Up</button></Link>
                </div>
            </div>
        </Layout>
    )
}


export default Login