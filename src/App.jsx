import style from '../src/style'
import {Nav, Hero} from '../src/components';

const App = () => (
    <div className={`${style.flexCenter} bg-primary w-full text-white overflow-hidden}`}>
      <div className={`${style.boxWidth}`}>

        <div className={`${style.paddingX} mb-5`}>
            <Nav />
        </div>

        <div className={`${style.paddingX} my-5 outline`}>
            <Hero />
        </div>

      </div>
    </div>
  
  )


export default App