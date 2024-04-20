import React from 'react';

export type DetailProps = {
  slices: number;
}

export const Detail: React.FC<DetailProps> = ({slices}) => {
  return (
      <h2>{`${slices} ${slices > 1 ? 'slices' : 'slice'} coming up`}</h2>
  )
}