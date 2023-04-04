import React from 'react'
function Avatar({children,backgroundColor,px,py,color,borderRadius,cursor}) {
  const style={
    backgroundColor,
    padding:`${py} ${px}`, 
    color: color || 'black', 
    borderRadius,
    fontSize:20,
    textAlign:"center",
    cursor:cursor||null
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
    {/*Here we use a special type of quotes in px and py*/}