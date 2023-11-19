import { useParams } from 'react-router-dom';

export default function Item() {
  const { itemId } = useParams();

  return <div>{itemId}</div>;
}
