import style from '../src/style'
import './styles/mainStyle.css'
import {Nav, Hero} from '../src/components';

const App = () => (
    <div className={`${style.flexCenter} bg-main w-full text-white overflow-hidden}`}>
      <div className={`${style.boxWidth} `}>

        <div className={`${style.paddingX} border-b-[1px] border-solid border-cyan-600`}>
            <div className={`xs:${style.paddingNone}`}>
              <Nav />
            </div>
        </div>

        <div className={`${style.paddingX} my-5`}>
            <Hero />
        </div>

      </div>
    </div>
  
  )


export default App