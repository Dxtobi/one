import PocketBase, { LocalAuthStore as AuthStore } from 'pocketbase';

import { pocketBaseInstance, serializeNonPOJOs } from '$lib/utils/utils';

interface CustomEvent extends FetchEvent {
  locals: {
    pb: PocketBase;
    user?: AuthStore['model'];
  };
}

export const handle = async ({ event, resolve }: { event: CustomEvent; resolve: Function }): Promise<Response> => {
    
  try {
    event.locals.pb = pocketBaseInstance
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (event.locals.pb.authStore.isValid) {
      event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
    } else {
      event.locals.user = undefined;
      }
      
      //console.log(event)

    const response = await resolve(event);
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
    return response;
  } catch (error) {
    console.log("from hooks:", error);
    throw error;
  }
};
