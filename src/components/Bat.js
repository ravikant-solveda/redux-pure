import React from 'react'
import { connect } from 'react-redux'

const Bat = (props) => {

  // console.log(props.bats);
  return (
    <div>
      <div>Bat : <span style={{fontWeight: 'bold'}}>{props.bats}</span></div>
      <button onClick={props.buyBat}> Buy Bat</button>
    </div>

  )
}

// global storge se value ko component me lane k liye

const mapStateToProps =(state)=>{
  return{
    bats:state.bat.bats
  }
}

//state ko action dene k liye
const mapDispatchToProps = (dispatch) => {
  return{
    buyBat:()=>dispatch({type:"BUY_BAT"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)