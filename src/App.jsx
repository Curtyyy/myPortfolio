import style from '../src/style'
import './styles/mainStyle.css'
import {Nav, Hero} from '../src/components';

const App = () => (
    <div className={`${style.flexCenter} ${style.padding} bg-main w-full text-white overflow-hidden`}>
      <div className={`${style.boxWidth}`}>
        
        <div className={`${style.paddingY} ${style.border1}`}>
            <div className={`${style.paddingNone}`}>
              <Nav />
            </div>
        </div>

        <div className={`${style.paddingY}`}>
            <div className={`${style.paddingNone}`}>
              <Hero />
            </div>
        </div>

      </div>
    </div>
  
  )


export default App