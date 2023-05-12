import { useLocation, useNavigate, Link } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()

  return (
    <header>
      <nav>
        {
          <div id="nav">
          </div>
        }
      </nav>
    </header >
  )

}

export default Navbar