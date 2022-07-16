import React from 'react'
import './Search.css'

const Input = (props) => {
  return (
      <section className='container'>
          <form className='form' onSubmit={props.submit} >

      <input className='form-input' type='text' onChange={props.SearchInput}  />
      </form>
    
    </section>
  )
}

export default Input