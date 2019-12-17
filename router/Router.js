import React, { Component } from 'react'
import { connect } from 'react-redux'
import isLoading from '../selectors/isLoading';


/**
 * 
 * should have prop to get route
 * should have prop to get component to render
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
    isLoading: isLoading(state)
  })
  
  export default connect(mapState)(Router)
  