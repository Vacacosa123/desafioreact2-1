import { Link } from "react-router-dom"

const NavBar = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                {
                    props.routes.map((elem, index) =>
                        <Link key={`link-${index}`} to={elem.to} className="navbar-brand">
                            {elem.linkText}
                        </Link>
                    )
                }

            </nav>
        </div>
    )
}

export default NavBar