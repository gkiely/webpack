/**
 * Children
 */
render(){
  return (
    <div>asdf</div>
  )
}
render() {
    return(
        {this.props.children} // prints: asdf
    )
}

/**
 * Handles user interaction
 */
class Title extends React.Component {
    // Using the method this way ensures you don't have to bind
    doSomething = () => {
      alert('Child text ' + this.props.children);
    }
    render() {
        return(
          <div className="">
            <a href="#" onClick={this.doSomething}>Click me</a>
          </div>
        )
    }
}

/**
 * Optional element
 */
render(){
  {this.props.myBool && <MyElement />}
}

// Multi-line Optional
{this.state.myBool && (
  <div>
  Text
  </div>
)}


/**
 * PropTypes
 * https://facebook.github.io/react/docs/reusable-components.html
 */
 static propTypes = {
   value: React.PropTypes.string.isRequired,
   children: React.PropTypes.node
 }
 render(){}