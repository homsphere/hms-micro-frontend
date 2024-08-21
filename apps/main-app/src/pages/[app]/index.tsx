import React from 'react';

//@ts-ignore
const HomeOne = React.lazy(() => import('subApp1/Home'));
//@ts-ignore
// const HomeTwo = React.lazy(() => import('subApp2/Home'));

export default function Page() {
  try {
    return (
      <React.Suspense fallback="Loading Remote HomeOne ...">
        {<HomeOne suppressHydrationWarning />}
      </React.Suspense>
    );
  } catch (error) {
    console.log('MicroFrontend error');
  }
}
