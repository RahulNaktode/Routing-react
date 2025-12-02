import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './view/Home.jsx'
import Contact from './view/Contact.jsx'

const root = createRoot(document.getElementById('root'));

const path = window.location.pathname;

if(path === '/'){
  root.render(<Home />);
}else if(path === '/contact'){
  root.render(<Contact />)
}else{
  root.render(<h1>404 Page Not Found</h1>)
}