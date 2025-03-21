import React from 'react'

const Formulario = () => {
  return (
    <>
      <form className='flex flex-column col 9 shadow p-3 redounder mt-4'>
        <h2>Productos</h2>
        <div className='input-group mb-3 col-12'>
        <label className='input-group-text'>
        <i className="bi bi-search"></i>
        </label>
        <input
        type = 'text' placeholder='buscar' className='form-control'></input>
        </div>
        <div className='input-group mb-3 col-12'>


        </div>
      </form>
    </>
  )
}

export default Formulario
