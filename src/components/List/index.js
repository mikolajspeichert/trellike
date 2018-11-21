import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListContainer = styled.div``

const ListName = styled.h2``

const EditableListName = styled.input``

const List = ({ name, children }) => (
  <ListContainer>
    <ListName>{name}</ListName>
    {children}
  </ListContainer>
)

List.propTypes = {
  children: PropTypes.element.isRequired,
}

export default List
