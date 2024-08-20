// import dynamic from 'next/dynamic';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// @ts-ignore
const SubApp1 = dynamic(() => import('subApp1/App'));
// @ts-ignore
const SubApp2 = dynamic(() => import('subApp2/App'));

export default function Page() {
  try {
    const router = useRouter();

    let MicroFrontendApp;

    console.log('MicroFrontend', router.query.app);

    if (router.query.app === 'sub-app-1') {
      MicroFrontendApp = SubApp1;
    } else if (router.query.app === 'sub-app-2') {
      MicroFrontendApp = SubApp2;
    } else {
      return <div>App not found</div>;
    }

    return <MicroFrontendApp />;
    // return <SubApp1 />;
  } catch (error) {
    console.log('MicroFrontend error', error);
  }
}

// export default function MicroFrontend() {
//   try {
//     const params = useRouter();
//     console.log('params', params.query.app);
//     const TestDynamicImport = dynamic(
//       () => import(`@my-microfrontend-monorepo/apps/${params.query.app}/src/app/page`),
//     );
//     console.log('tests dynamic imports', TestDynamicImport);

//     if (!TestDynamicImport) {
//       return <div>TestDynamicImport component not found</div>;
//     }

//     return <TestDynamicImport />;
//   } catch (error) {
//     console.log('tests dynamic imports - ERROR', error);
//   }
// }
