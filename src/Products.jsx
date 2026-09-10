import { useState } from 'react'

function App() {
  const [first, setFirst] = useState(0){
  return (
    <>
     <div style={{display:'flex',flexWrap:'wrap',gap:'30px'}}    >

      {
        products.map((n)=>{
          return <Card name={n.title} image={n.image} price={n.price}  />
        })
      }
     </div>

    </>
  )
}

export default Products
plugins: [
    tailwindcss(),
  ],