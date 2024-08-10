import { App } from "./components/App"
import { createRoot } from 'react-dom/client'

const root = document.querySelector('#root')

const container = createRoot(root)

container.render(<App />)