import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import LayoutOne from './components/LayoutOne/LayoutOne'
import About from './components/pages/About'
import LayoutTwo from './components/LayoutTwo/LayoutTwo'
import Blog from './components/pages/Blog'
import Services from './components/pages/Services'
import LayoutThree from './components/LayoutThree/LayoutThree'
import Contact from './components/pages/Contact'

function App() {
  const myRoute =createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* layout one */}
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        </Route>
        {/* layout two */}
        <Route path='/LayoutTwo' element={<LayoutTwo/>}>
        <Route index element={<Blog/>}/>
        <Route path='/LayoutTwo/services' element={<Services/>}/>
        </Route>
        {/* layout three */}
        <Route path='/LayoutThree' element={<LayoutThree/>}>
        <Route index element={<Contact/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
