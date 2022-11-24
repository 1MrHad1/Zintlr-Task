import {BsSearch} from 'react-icons/bs'
import{GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
  return (
    <div>
        <div className='App-header'>
            <div className='menu'>
            <GiHamburgerMenu></GiHamburgerMenu></div>
            <h2 style={{paddingTop:20}}>Zintlr News</h2>
            <div className='search'>
            <BsSearch></BsSearch>
            </div>
        </div>
    </div>
    
  )
}
export default Header