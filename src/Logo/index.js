import ducatiLogo from '../assets/ducati_id1.svg'
import monsterLogo from '../assets/Monster-MY18-01-Model-Preview-Logotipo.svg'

import './index.scss'

function Logo() {
  return(
      <div className="logo-container">
        <img className="ducatiLogo" src={ducatiLogo} alt="Ducati"/>
        <img className="monsterLogo" src={monsterLogo} alt="Monster"/>
      </div>
  );
}

export default Logo;