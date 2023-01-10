import React from 'react'
import '../Button/button.scss'
const Button = ({title, ...rest}) => {
    return (
        <Button className='button' {...rest} >{title}</Button>
    )
}

export default Button