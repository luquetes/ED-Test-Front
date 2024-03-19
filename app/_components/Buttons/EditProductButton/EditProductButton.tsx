import Link from 'next/link';

type Props = {
    id: string;
}

const EditProductButton = ({ id } : Props) => (
  <div>
    <Link href={`/product/edit/${id}`} className="btn btn-primary">Edit</Link>
  </div>
);

export default EditProductButton;
