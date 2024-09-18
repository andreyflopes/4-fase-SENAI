
import { Link } from 'react-router-dom'


function NavBar() {
  return (
   <nav> 
      <Link to="/"> Home </Link>
      <Link to="/contato"> Contato </Link>
      <Link to="/generica"> Generica</Link>
      <Link to="/final">Final</Link>
   </nav>
  )
}

export default NavBar
