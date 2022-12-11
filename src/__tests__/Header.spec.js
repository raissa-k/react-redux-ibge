import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Header from '../components/Header'

test('renders a logo with accessible text"', async () => {
  render(<Header />)
  const input = await screen.findByRole("img")
  expect(input).toHaveAttribute("alt", "Logo IBGE")
})