import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import styles from './components/main.style.module.css'
import Landing from './views/Landing'
// import CustomCarousel from './components/CustomCarousel';
// import Background from './components/Background'
import Projects from './views/Projects'
import Resume from './views/Resume'
import Contact from './views/Contact'


function App() {
  
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const loadData = async () => {
  //     await new Promise((res) => setTimeout(res, 2000))
  //     setLoading((loading) => !loading)
  //   }
  //   loadData()
  // }, [])

  // if (loading) {
  //   return (
  //     <div className={styles.background} >
  //       <div className={styles.mask}></div>
  //     </div>
  //   )
  // } else {

    return ( 
      <div className="App" >
        {/* {(loading) ?
          <div className={styles.background} >
            <div className={styles.mask}></div>
          </div>
          :
        } */}
        {/* <Background /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/projects">
              <Projects />
              {/* <CustomCarousel /> */}
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  // }
}

export default App;
