import React, { FC } from 'react';

import { Title } from './section-title.styles';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <Title>{title}</Title>;
};
