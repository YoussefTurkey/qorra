import Home from './views/Home'
import About from './views/About'
import Excellence from './views/Excellence'
import Team from './views/Team'
import Brand from './views/Brand'
import dark from './assets/images/dark.png'

function App() {
  return (
    <>
      <Home />
      <About />
      <Excellence />
      <Team />
      <Brand />

      <img src={dark} className='dark_theme_icon' title='dark mode' alt='dark-theme' />
    </>
  );
}

export default App;
