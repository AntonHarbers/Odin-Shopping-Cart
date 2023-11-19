import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <div>Oops, looks like theres been an error!</div>
      <Link to="/">Back to Homepage</Link>
    </>
  );
}
