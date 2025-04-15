import React from 'react'

function Alerts(props) {
    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  return (
    <>
        <div>
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div> }
        </div>
    </>
  )
}

export default Alerts
