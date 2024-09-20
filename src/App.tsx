import { lazy, Suspense } from "react"

import Loading from "./components/Loading"
import "./App.css";

const Home = lazy(() => import('./pages/Home'));

const LoadingFallback = () =>(
  <div className="min-h-screen overflow-hidden">
    <Loading/>
  </div>
)

const App = () =>{
  return(
    <div className="text-white scroll-smooth">
      <Suspense fallback={<LoadingFallback/>}>
        <Home/>
      </Suspense>
      
    </div>
  )
}

export default App