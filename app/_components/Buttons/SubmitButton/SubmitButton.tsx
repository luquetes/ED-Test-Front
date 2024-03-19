import { useFormStatus } from 'react-dom';

type Props = {
  isEditing: boolean;
}

const SubmitButton = ({ isEditing } : Props) => {
  const { pending } = useFormStatus();
  const buttonText = isEditing ? 'Edit product' : 'Create product';
  return (
    <button type="submit" className="btn btn-primary btn-block md:btn-wide self-end">
      {pending ? <span className="loading loading-spinner" /> : buttonText}
    </button>
  );
};

export default SubmitButton;
