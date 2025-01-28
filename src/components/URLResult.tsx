"use client"

export interface Props extends React.HTMLAttributes<HTMLElement> {
  uuid: string;
}

export default function URLResult({ uuid, ...props }: Props) {
  return (
    <div {...props}>
      {uuid}
    </div>
  )
}
