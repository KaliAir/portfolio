import './App.css';
import React,{useRef} from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Profile from './components/Profile'
import {useTransform, useScroll} from 'framer-motion'
import Home from './components/Home'
import Resume from './components/Resume'
import {useState, useEffect} from 'react'


function App() {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      // setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["end end", "end start"]
  })

  const htmlProg = useTransform(scrollYProgress, [0,.8],[0,400])
  const cssProg = useTransform(scrollYProgress, [0,.8],[0,600])
  const javascriptProg = useTransform(scrollYProgress, [0,.8],[0,300])
  const reactProg = useTransform(scrollYProgress, [0,.8],[0,540])
  const mysqlProg = useTransform(scrollYProgress, [0,.8],[0,350])
  const phpProg = useTransform(scrollYProgress, [0,.8],[0,400])
  const laravelProg = useTransform(scrollYProgress, [0,.8],[0,450])

  const router = createBrowserRouter(
    createRoutesFromElements(  
        <Route path='/' element={<Profile targetRef={targetRef} />}>
          <Route path='home' element={<Home
          htmlProg={htmlProg}
          cssProg={cssProg}
          javascriptProg={javascriptProg}
          reactProg={reactProg}
          phpProg={phpProg}
          mysqlProg={mysqlProg}
          laravelProg={laravelProg}
          viewportWidth={viewportWidth}
          />}/>
          <Route path='resume' element={<Resume viewportWidth={viewportWidth}/>}/>
        </Route>

      )
    )
  return ( 
    <RouterProvider router={router}/>
  );
}

export default App;
