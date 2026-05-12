import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

export const sampleProducts = [
  { id: 1, name: "Apple",  category: "Fruits", price: 1.20, emoji: "🍎" },
  { id: 2, name: "Banana", category: "Fruits", price: 0.80, emoji: "🍌" },
  { id: 5, name: "Milk",   category: "Dairy",  price: 1.80, emoji: "🥛" },
];

test('toggles dark mode on button click', () => {
  render(<App />)
  const toggleBtn = screen.getByRole('button', { name: /toggle/i })
  expect(toggleBtn).toBeInTheDocument()
  expect(toggleBtn).toHaveTextContent('Toggle Dark Mode')
  fireEvent.click(toggleBtn)
  expect(toggleBtn).toHaveTextContent('Toggle Light Mode')
  fireEvent.click(toggleBtn)
  expect(toggleBtn).toHaveTextContent('Toggle Dark Mode')
})

test('filters products by category', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')

  fireEvent.change(dropdown, { target: { value: 'Fruits' } })
  expect(screen.getByText('Apple')).toBeInTheDocument()
  expect(screen.queryByText('Milk')).not.toBeInTheDocument()

  fireEvent.change(dropdown, { target: { value: 'Dairy' } })
  expect(screen.getByText('Milk')).toBeInTheDocument()
  expect(screen.queryByText('Apple')).not.toBeInTheDocument()
})

test('displays message when no products match filter', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')
  fireEvent.change(dropdown, { target: { value: 'NonExistent' } })

  expect(screen.getByText(/no products available/i)).toBeInTheDocument()
})

test('adds items to cart', () => {
  render(<App />)

  const appleCard = screen.getByTestId('product-' + sampleProducts.find(i => i.name === 'Apple').id)
  const appleBtn = appleCard.querySelector('button')
  fireEvent.click(appleBtn)

  expect(screen.getByText(/Apple is in your cart/i)).toBeInTheDocument()
})