import { Button } from "./components/ui/button"

const App = () => {
  console.log(import.meta.env.VITE_API_BASE_URL)
  return (
    <div className='text-red-500'>
      Hallo
      <Button>Test</Button>
    </div>
  )
}

export default App 