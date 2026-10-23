import Header from './component/Header'
import ProfileCard from './component/ProfileCard'
import Footer from './component/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  )
}

export default App