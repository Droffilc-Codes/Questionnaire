import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedBackList from "./components/FeedBackList"
import Header from "./components/Header/Header"
import './index.css'
import FeedBackStat from "./components/FeedBackStat"
import FeedBackForm from "./components/FeedBackForm"
import AboutPage from './pages/AboutPage'
import { FeedBackProvider } from './context/FeedbackContext'

import AboutLinkIcon from './components/AboutLinkIcon'


function App(){
   

    return (
        <FeedBackProvider>
            <Router>
                    <Header title={'Mental Skills Training App'} />
                        <div className="myApp">
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedBackForm />
                                    <FeedBackStat />
                                    <FeedBackList />

                                </>
                            } />
                        
                            <Route path='/about'  element={<AboutPage/>}/>
                        </Routes>  
                        
                        <AboutLinkIcon />
                        </div>
            </Router>
        </FeedBackProvider>
        
            
     
       
    )
}
export default App