import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.nav_box}>

        <h1>E-Commerce</h1>
    <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
    </div>
    </div>
  )
}

export default Navbar