import { deleteProductAction } from '@/app/_utils/actions';

type Props = {
    id: string;
}

const DeleteProductButton = ({ id } : Props) => (
  <form aria-label="form" action={deleteProductAction}>
    <input type="hidden" name="id" value={id} />
    <button className="btn btn-error" type="submit">Delete</button>
  </form>
);

export default DeleteProductButton;
