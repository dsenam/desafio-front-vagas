import React, { JSX } from 'react';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label';

interface BaseTypographyProps {
  variant: Variants;
  title: React.ReactNode;
  className?: string;
}

type ConditionalProps<T extends Variants> = T extends 'p'
  ? JSX.IntrinsicElements['p']
  : JSX.IntrinsicElements['h1'];

type TypographyProps<T extends Variants> = BaseTypographyProps & ConditionalProps<T>;

const componentsMap: Record<Variants, Variants> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  label: 'label'
};

const Typography = <T extends Variants>({ variant, title, className, ...rest }: TypographyProps<T>) => {
  const Tag = componentsMap[variant] as React.ElementType;

  return <Tag className={className} {...rest}>{title}</Tag>;
};

export default Typography;