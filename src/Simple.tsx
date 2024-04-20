import React from 'react';
import { Detail } from './Detail';
export type SimpleProps = {
  bread: 'bagel' | 'white' | 'wheat';
  slices: number;
}
export const Simple: React.FC<SimpleProps> = ({bread, slices}) => {
  return (
    <>
      <h2>{`Toasting ${bread}`}</h2>
      <Detail slices={slices} />
    </>
  );
}