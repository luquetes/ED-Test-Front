'use client';

import CurrencyInput from 'react-currency-input-field';

type Props = {
    defaultValue?: string;
}

const PriceInput = ({ defaultValue } : Props) => (
  <div>
    <CurrencyInput className="input input-bordered w-full" prefix="$" name="price" placeholder="Product price" decimalsLimit={2} decimalSeparator="." defaultValue={defaultValue ? +defaultValue / 100 : 0} />
  </div>
);

export default PriceInput;
