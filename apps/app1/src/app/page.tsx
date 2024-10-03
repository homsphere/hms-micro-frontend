'use server';

import Home from '../modules/home';
import { getCurrentUserInformations } from './actions';

export default async function Index() {
  const { userId } = await getCurrentUserInformations();
  console.log('userId', userId);
  return <Home />;
}
