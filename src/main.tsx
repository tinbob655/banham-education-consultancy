import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import './scss/index.scss';
import {BrowserRouter} from "react-router";
import Header from "./components/header/Header.tsx";
import AllRoutes from "./AllRoutes.tsx";
import Footer from "./components/footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Loading from "./components/Loading.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>

                <Header/>

                <div id={"content"}>
                    <Suspense fallback={<Loading/>}>
                        <AllRoutes/>
                    </Suspense>
                </div>

                <Footer/>

                <ScrollToTop/>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
