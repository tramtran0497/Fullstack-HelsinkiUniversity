import React from "react"

const PersonForm = ({onSubmit, valueName, onChangeName, valuePhone, onChangePhone })=>{
    return(
      <div>
        <form onSubmit={onSubmit}>
          <div>
            name: <input value={valueName} onChange={onChangeName}/>
          </div>
          <div>
            number: <input value={valuePhone} onChange={onChangePhone}/>
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
      </div>
    )
  }

export default PersonForm
  