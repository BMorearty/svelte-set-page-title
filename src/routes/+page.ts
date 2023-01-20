import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    headline: 'This is the headline',
  };
};
