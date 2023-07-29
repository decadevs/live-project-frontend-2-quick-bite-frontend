import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & object
const Button = (props: Props) => {
  return (
   <button {...props}/>
  )
}

export default Button;