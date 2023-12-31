import React from 'react'
import classes from './HeaderCardButton.module.css'
import CartIcon from '../../../assets/Icons/cartIcon.svg'

const HeaderCardButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <img src={CartIcon} />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCardButton