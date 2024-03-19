import { render, fireEvent } from '@testing-library/react';
import DeleteProductButton from '../_components/Buttons/DeleteProductButton/DeleteProductButton';

describe('DeleteProductButton', () => {
  it('renders', () => {
    const { getByRole } = render(<DeleteProductButton id="1" />);
    const button = getByRole('button', { name: /delete/i });
    expect(button).toBeInTheDocument();
  });

  it('submits the correct id when clicked', () => {
    const { getByRole } = render(<DeleteProductButton id="1" />);
    const form = getByRole('form');
    const button = getByRole('button', { name: /delete/i });

    fireEvent.click(button);
    expect(form).toHaveFormValues({ id: '1' });
  });
});
