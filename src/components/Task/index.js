import React from 'react'
import PropTypes from 'prop-types'

const Task = () => {

}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
}

export default Task

