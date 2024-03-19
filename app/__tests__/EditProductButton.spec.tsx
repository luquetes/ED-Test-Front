import { render } from '@testing-library/react';
import EditProductButton from '../_components/Buttons/EditProductButton/EditProductButton';

describe('EditProductButton', () => {
  it('renders the edit product button with correct href', () => {
    const productId = '123'; // sample product id
    const { getByText } = render(<EditProductButton id={productId} />);
    const editButton = getByText('Edit');

    // Check if the href attribute contains the correct URL
    expect(editButton.getAttribute('href')).toBe(`/product/edit/${productId}`);

    // You can also check if the button has the correct class
    expect(editButton).toHaveClass('btn btn-primary');
  });
});
