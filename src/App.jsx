import ShadiRouterProvider from "./context/ShadiRouterProvider"
import { PrimeReactProvider } from "primereact/api"

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../node_modules/primeflex/primeflex.css"
import "./styles/main.css"

function App() {
  return (
    <PrimeReactProvider>
      <ShadiRouterProvider></ShadiRouterProvider>
    </PrimeReactProvider>
  )
}

export default App
