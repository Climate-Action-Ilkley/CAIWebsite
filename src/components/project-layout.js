import React from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer'
import Helmet from 'react-helmet'
import Header from './Header'
class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">
          <Helmet title="Climate Action Ilkley" />
          <Header />

          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
