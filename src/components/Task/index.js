import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h4``

const Description = styled.p``

const Container = styled.div``

const Task = ({ title, description = '' }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string, // eslint-disable-line
  onUpdate: PropTypes.func.isRequired,
}

export default Task
