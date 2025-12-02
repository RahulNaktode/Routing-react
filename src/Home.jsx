import './Home.css'
import Navbar from './Navbar.jsx'

function Home() {
  return (
    <div className='home-info'>
      <Navbar />  
      <h1 className='home-heading'>Welcome to Our Site</h1>

      <div>
        <h2>About This Project</h2>
        <p>
          This is a small React routing demo built with Vite. Use the navigation
          above to explore different pages.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Simple client-side routing</li>
          <li>Reusable Navbar component</li>
          <li>Responsive, minimal styling</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
