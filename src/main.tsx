import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import './scss/index.scss';
import {BrowserRouter} from "react-router";
import Header from "./components/header/Header.tsx";
import AllRoutes from "./AllRoutes.tsx";
import Footer from "./components/footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Loading from "./components/Loading.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Suspense fallback={<Loading/>}>

              <Header/>

              <div id={"content"}>
                <AllRoutes/>
              </div>

              <Footer/>

            <ScrollToTop/>

        </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
