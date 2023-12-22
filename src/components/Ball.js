import React, { useState } from 'react'
import { connect } from 'react-redux'


const Ball = ({ball, buyBall,sellBall}) => {
    const [qty,setQty] = useState('120');
  return (
    <div>
        <div>Ball : <span style={{fontWeight: 'bold'}}>{ball}</span>  </div>
        <div>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
        </div>
        <button onClick={()=>buyBall(qty)}> Buy Ball</button>
        <button onClick={sellBall}>Sell Ball</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        ball: state.ball.balls
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        buyBall: (qty)=>dispatch({type:'BUY_BALL',payload:qty}),
        sellBall: ()=>dispatch({type: 'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Ball)