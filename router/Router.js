import React, { Component } from 'react'
import { connect } from 'react-redux'


/**
 * 
 * This class will be responsible to listen and respond to location/route changes
 * 
 * 
 */
class Router extends Component {  
    constructor(props) {
      super(props);
    }
    render() {
      const ComponentToRender = require(`../pages/${this.props.page}`).default
      return <ComponentToRender />
    }
  }
  
  const mapState = ({ page, direction, ...state }) => ({
    page,
    direction,
  })
  
  export default connect(mapState)(Router)
  