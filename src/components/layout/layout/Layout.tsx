import Category from "../category/Category.tsx"
import Footer from "../footer/Footer.tsx"
import Header from "../header/Header.tsx"
import "./Layout.css"
import Routing from "../routing/Routing.tsx"

export default function Layout(){
    return(
        <div className="layout">
            <header>
                <Header />
            </header>
            <aside>
                <Category />
            </aside>
            <main>
               <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}