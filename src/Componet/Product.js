import React from 'react'
import ScrollingSection from './ScrollingSection '
const panels = [
    { title: "Panel 1", description: "This is the first panel" },
    { title: "Panel 2", description: "This is the second panel" },
    { title: "Panel 3", description: "This is the third panel" },
    { title: "Panel 4", description: "This is the fourth panel" },
  ];
const Product = () => {
  return (
    <div>
      <ScrollingSection panels={panels}/>
    </div>
  )
}

export default Product
