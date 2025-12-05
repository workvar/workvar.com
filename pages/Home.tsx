import React from 'react';
import {
  HeroSectionComponent,
  ChapterSectionComponent,
  RitualSectionComponent,
  ProductPreviewComponent,
  EpilogueSectionComponent,
} from '@/components/Home';

const Home: React.FC = () => {
  return (
    <>
      <HeroSectionComponent />
      <ChapterSectionComponent />
      <RitualSectionComponent />
      <ProductPreviewComponent />
      <EpilogueSectionComponent />
    </>
  );
};

export default Home;