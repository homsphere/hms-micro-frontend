import React from 'react';
import styles from './page.module.css';

//@ts-ignore
// const HomeOne = React.lazy(() => import('subApp1/Home'), { ssr: false });
const HomeThree = React.lazy(() => import('subApp3/Home'), { ssr: false });

export default function Home() {
  return (
    <React.Suspense fallback="Loading Remote HomeOne ...">
      <HomeThree />
    </React.Suspense>
  );
}
