import React, {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Navbar, News } from './component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // const apiKey = "4b1b9504139d4cdea2d79d33597af392";
const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route exact path='/' element={ <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />}  />
          <Route exact path='/business' element={ <News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' />}  />
          <Route exact path='/entertainment' element={ <News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' />}  />
          <Route exact path='/generalhealth' element={ <News apiKey={apiKey} setProgress={setProgress} key="generalhealth" pageSize={pageSize} country="in" category='generalhealth' />}  />
          <Route exact path='/science' element={ <News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category='science' />}  />
          <Route exact path='/sports' element={ <News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' />}  />
          <Route exact path='/technology' element={ <News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' />}  />
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App