import React from 'react'

function Button({ children, version = 'primary', type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

export default Button
