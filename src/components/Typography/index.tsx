import React, {JSX} from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  className?: string;
}

const componentsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p'
};

const Typography = ({ variant, children, className }: TypographyProps) => {
  const Tag = componentsMap[variant] as keyof JSX.IntrinsicElements || 'p'

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;