import './Header.css'
import { BlocksShuffle2 } from './icons/BlocksShuffle2'

function Header() {
  const iconBig = {
    width: "90px",
    height: "90px"
  }
  return (
   <div className='Header'>
    <BlocksShuffle2 style={iconBig}/>

   </div>
  )
}

export default Header
