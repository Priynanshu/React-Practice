import React from 'react'
import styles from "./header.module.css"

const header = () => {
  return (
    <div className='heading'>
      this is header file 
      <div className={styles.btn}>BUTTON</div>
    </div>
  )
}

export default header
