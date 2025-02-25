import { BrowserRouter } from "react-router-dom"
import Layout from "../layout/layout/Layout.tsx"
import "./App.css"
import { JSX } from "react"



export default function App(): JSX.Element {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}