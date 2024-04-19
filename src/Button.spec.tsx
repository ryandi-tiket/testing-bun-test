import { expect, test } from 'bun:test'
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

test('should render correctly', () => {
  render(<Button>Hello</Button>)

  expect(screen.getByRole('button', { name: /hello/i })).toBeTruthy()
})

test('should render correctly a second time', () => {
  render(<Button>Hello</Button>)

  // test fails: found multiple elements
  expect(screen.getByRole('button', { name: /hello/i })).toBeTruthy()
})
