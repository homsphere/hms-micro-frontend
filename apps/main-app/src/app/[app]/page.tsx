import dynamic from 'next/dynamic';

export default function MicroFrontend({ params }: { params: { app: string } }) {
  try {
    console.log('params', params);
    const TestDynamicImport = dynamic(
      () => import(`@my-microfrontend-monorepo/apps/${params.app}/src/app/page`),
    );
    console.log('tests dynamic imports', TestDynamicImport);

    if (!TestDynamicImport) {
      return <div>TestDynamicImport component not found</div>;
    }

    return <TestDynamicImport />;
  } catch (error) {
    console.log('tests dynamic imports - ERROR', error);
  }
}
