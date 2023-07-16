import style from '../src/style'
import './styles/mainStyle.css'
import {Nav, Hero, About, DownSign} from '../src/components';

const App = () => (

    <div className={`bg-main w-full text-white overflow-hidden`}>

      <div className={`${style.flexCenter} ${style.padding}`}>
        <div className={`${style.paddingY} ${style.border1} ${style.boxWidth}`}>
          <Nav />
        </div>
      </div>

      <div className={`${style.flexCenter} ${style.padding}`}>
        <div className={`${style.paddingY} ${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${style.flexCenter} ${style.padding}`}>
        <div className={`${style.paddingY} ${style.boxWidth}`}>
          <DownSign />
        </div>
      </div>

      <div className={`${style.flexCenter} ${style.padding}`}>
        <div className={`${style.paddingY} ${style.boxWidth}`}>
          <About/>
        </div>
      </div>
      
      <div className={`${style.flexCenter} ${style.padding}`}>
        <div className={`${style.paddingY} ${style.boxWidth}`}>
          <DownSign />
        </div>
      </div>


    </div>
    
  
  )


export default App