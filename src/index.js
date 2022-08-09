import React, { useState } from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return <button {...props} className={styles[props.type]} > {props.type} </button>
}