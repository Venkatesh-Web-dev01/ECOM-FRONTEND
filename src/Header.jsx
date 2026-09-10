function Header() {
  return (
    <header>
      <h1>My Shop</h1>
    </header>
  )
}  // <-- only one closing brace for the function

//function Header() {
  return (
    <>
    <header style={{display:"flex",justifyContent:"space-evenly"}}>
    <img   height={50}  width={100}      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Lbz3_htIQWXsSV1Kse79UTopcNUfksh6lG_5EM16sQ&s=10" alt="" />
    <input placeholder="search products"   style={{maxWidth:'350px',borderRadius:'20px'}}   type="text" />
    <nav style={{display:'flex', gap:'30px',alignItems:'center'}}     >
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Products</a>
      <a href="">Pricing</a>
    </nav>
    </header>
    </>
  )
}

//export default Header



function Header () {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <a className="btn btn-ghost text-xl">ECOM PVP</a>

  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
<nav style={{display:'flex', gap:'30px',alignItems:'center'}}     >
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Products</a>
      <a href="">Pricing</a>
    </nav>
</div>
    </>
  )
}

export default Header



function Header = () => {
  return (
    <div className="navbar bg-base=100 shadow-sm flex justify-evenly">Header</div>
  )
}

export default Header