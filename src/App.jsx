import React from 'react'

const displayMessage = (isConfirmed, isFormSubmited) => {
  if(isFormSubmited){
  if(isConfirmed){
    return <ValidationMessage txt="Graet! We will be happy to see you in our cinema!"/>
  } else {
    return <ValidationMessage txt="Sorry, you need to be 16 to see this movie." />
  } 
  } else {
    return null
  }
}

const ValidationMessage = (props) => {
  const {txt} = props
  return (
    <p>{txt}</p>
  )
}

class CheckboxAgeConfirmaton extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmited) {
    this.setState({
      isFormSubmited: true
    })
    }

  }


  render(){
    
    const {isConfirmed, isFormSubmited} = this.state

    return (
      <>
        <h1>Buy a ticket for the best Horror Movie of this year!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed}/>
          <label htmlFor="age">I confirm, that I have more then 16 years old.</label>
          <br/>
          <br/>
          <button type="submit">Purchuase</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmited)}
      </>
    )
  }
}

export default CheckboxAgeConfirmaton;