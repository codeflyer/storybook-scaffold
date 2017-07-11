import React from 'react'
import { storiesOf } from '@storybook/react'
import Hello from '.'

storiesOf('Hello', module)
  .add('First hello', () => <Hello />)
