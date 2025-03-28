import { Button } from './components/ui/button'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/Mode-toggle'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className="bg-black text-white font-extrabold ">
          <Button variant="link" className='text-red-400'>
            Click Here
          </Button>
          <ModeToggle/>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
