import './index.scss'
import menu from '../assets/Menu.png'
import globo from '../assets/ww1.svg'

function header() {
  return(
    <header>
        <img src={menu} alt="MenuToggle"/>
        <div className="menu-text">
            <img src={globo} alt="globo"/>
            <span>INTERNATIONAL WEBSITE | MY DUCATI</span>
        </div>
    </header>
  );
}

export default header;