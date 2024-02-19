import Layout from '../layout/Layout'
import './css/about.css'
import about from '../images/about.jpeg'

const About = () => {
    return (
        <Layout>
            <div id="about-container">
                <div id="about-photo">
                    <img id="about-img" src={about} alt="About Us"/>
                </div>

                <div id="about">
                    <h1>About Us</h1>
                    <p>This Website is made for educational purpose. I'm a MERN Stack Develper who made this website. 
                        This website is especially helpul for those, who are learning English.
                        Anyone can take advantage of this website.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About