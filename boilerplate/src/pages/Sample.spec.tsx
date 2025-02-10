import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Sample from './Sample';

describe('Sample Page', () => {
  it('should render the sample page', () => {
    render(<Sample />);
    expect(screen.getByText('Sample Page')).toBeInTheDocument();
    expect(screen.getByText('Hello !!!')).toBeInTheDocument();
  });

  it('should render with prop', () => {
    render(<Sample name={'Apache'} />);
    expect(screen.getByText('Hello Apache!!!')).toBeInTheDocument();
  });

  it('should counter html element exists', () => {
    render(<Sample name={'Apache'} />);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should counter increase on button click', async () => {
    render(<Sample name={'Apache'} />);

    const button = screen.getByRole('button', {
      name: 'Increment',
    });
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue.textContent).toEqual('Count: 0');
    await userEvent.click(button);
    expect(counterValue.textContent).toEqual('Count: 1');
    await userEvent.click(button);
    expect(counterValue.textContent).toEqual('Count: 2');
  });
});
