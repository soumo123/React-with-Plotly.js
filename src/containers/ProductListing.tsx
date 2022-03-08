import React from 'react'
import '../App.css'
import Plot from 'react-plotly.js'
import { useSelector } from 'react-redux'
import { clearScreenDown } from 'readline'

const ProductListing = () => {
  const products = useSelector((state: any) => state.allProducts.products)
  if (products) {
    const x = []
    const y = []
    products.forEach((product: any) => {
      x.push(product.complaint_year_number)
      y.push(product.complaint_precinct_code)

    })
    const drag = (event:any)=>{
      var xaxis = []
      var yaxis = []

      event.points.forEach((pt:any)=>{
        xaxis.push(pt.x)
        yaxis.push(pt.y)
        console.log("X axis Values are :",xaxis)
        console.log("Y axis Values are :",yaxis)
      })
    }
      return <>
        <h1 className="graph_header">Plotting Graph </h1>
        <h4 className="graph_title">Plot: complaint_year_number VS  complaint_precinct_code</h4>
        <Plot  layout={ {width: 700, height: 500} } data={[{
          x: x,
          y: y,
          type: "bar"
        }]} onSelected = {drag}/>
      </>
  } else {
    return <></>
  }

}

export default ProductListing


