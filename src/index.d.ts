/// <reference types="react" />
declare namespace SimpleReactComponent {
  type SimpleProps = {
    bread: 'bagel' | 'white' | 'wheat';
    slices: number;
  }
  const Simple: React.FC<SimpleProps>;
}