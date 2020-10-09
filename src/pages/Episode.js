import React, { Component } from 'react'
import {connect} from 'react-redux'

import episodeAction from '../redux/actions/episode'

class Episode extends Component {
  componentDidMount() {
    this.props.getEpisode()
  }
  
  render() {
    const {isLoading, data, isError, alertMsg} = this.props.episode
    return (
      <div>
        {!isLoading && !isError && data.length!==0 && data.map(item=>(
          <>
          <div>{item.name}</div>
          </>
        ))}
        {isLoading&& !isError && (
          <div>Loading</div>
        )}
        {isError&& alertMsg!=='' && (
          <div>{alertMsg}</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  episode: state.episode
})

const mapDispatchToProps = {
  getEpisode: episodeAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode)