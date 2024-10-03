import { getAccessToken, getSession } from '@auth0/nextjs-auth0';

export async function getCurrentUserInformations() {
  console.log('getCurrentUserInformations');
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    throw new Error('getCurrentUserInformations - ERROR - no user');
  }

  const userId = user.sub;

  const { accessToken } = await getAccessToken();
  if (!accessToken) {
    throw new Error('getCurrentUserInformations - ERROR - no accessToken');
  }
  return { userId };
}
