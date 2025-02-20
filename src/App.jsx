
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Appbar from './components/Appbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import DataProvider from './context/DataProvider'
import Cover from './pages/Cover'
import Response from './pages/Response'
import UpdatePage from './pages/UpdatePage'

function App() {

  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Cover />} />
          <Route path="response" element={<Response />} />
          <Route path="about" element={<About />} />
          <Route path="update" element={<UpdatePage />} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer />
        </DataProvider>
    </BrowserRouter>
  )
}

export default App
