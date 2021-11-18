import { ErrorProps } from 'next/error';

export default function Error(props: ErrorProps) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}
