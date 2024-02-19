import {Link} from "react-router-dom"
import Layout from "../layout/Layout"
import "./css/nopage.css"

const NoPage = () => {
    return (
        <Layout>
            <div id="no-page">
                <h2>Sorry, this page isn't available.</h2>
                <Link to="/"><button>Go Back</button></Link>
            </div>
        </Layout>
    )
}

export default NoPage