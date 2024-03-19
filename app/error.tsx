'use client';

import Error from 'next/error';

type Props = {
    error: Error & {message: string}
    reset: () => void;
}

const ErrorPage = ({ error, reset } : Props) => (
  <div className="flex flex-col justify-between items-center m-auto gap-6">
    <h1 className="text-3xl">Error found!</h1>
    <p>Oops, something went wrong and we could not load our store.</p>
    <p>{error.message}</p>
    <button className="btn btn-primary" type="button" onClick={reset}>Try again</button>
  </div>
);

export default ErrorPage;
