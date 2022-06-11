import React from 'react'

import { Container, Text } from './styled'
import { FaBitcoin } from 'react-icons/fa'

const Header: React.FC = () => {
  return (
    <Container>
      <FaBitcoin style={{ fontSize: '4rem', color: 'E3AE14' }} />
      <Text>Bitcoin Price</Text>
    </Container>
  );
}

export default Header;