// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact22 from './pages/Contact22.jsx';
import OrderNow from './pages/OrderNow.jsx';
import Error from './pages/Error.jsx';
import AppLayout from './Components/AppLayout/AppLayout.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/services',
        element : <Services />
      },
      {
        path : '/contact',
        element : <Contact22 />
      },
      {
        path : '/order',
        element : <OrderNow />
      },
    ]
  },
  {
    path : '*',
    element : <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)