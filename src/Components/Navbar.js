import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{background:props.b, position:'fixed', width:"100%", zIndex:3,
    backdropFilter:props.b!=="none"? "blur(10px)":"none",
    transition:"all ease-in 0.1s"
  }}>
  <div className='d-flex'>
    <a className="navbar-brand navitem mx-3" href="/">ATMOS</a>
  </div>
  <div className="d-flex">
    <a className="navbar-brand navitem log mx-3" href="/">LOGIN</a>
  </div>
</nav>
    </>
  )
}
