import Header from './Header'
import Footer from './Footer'
import './css/layout.css';

const Layout = ({children}) => {

    return (
        <div>
            <Header />
            <main id="layout">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout