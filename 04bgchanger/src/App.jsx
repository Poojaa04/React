import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 '>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick ={ () => setColor("red")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick ={ () => setColor("green")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"green"}}>Green</button>

          <button 
          onClick ={ () => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"blue"}}>Blue</button>

          <button 
          onClick ={ () => setColor("olive")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"olive"}}>Olive</button>

          <button 
          onClick ={ () => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"Yellow"}}>Yellow</button>

          <button 
          onClick ={ () => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"pink"}}>Pink</button>

          <button 
          onClick ={ () => setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full'
          style={{backgroundColor:"lavender"}}>Lavender</button>
         </div>
      </div>
    </div>
  )
}

export default App
