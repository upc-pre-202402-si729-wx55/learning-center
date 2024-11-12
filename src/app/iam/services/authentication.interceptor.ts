import {HttpInterceptorFn} from '@angular/common/http';

/**
 * Interceptor to add the token to the request headers
 * @summary
 * This interceptor is used to add the token to the request headers.
 * The token is stored in the local storage and is added to the request headers.
 * @param request
 * @param next
 */
export const authenticationInterceptor: HttpInterceptorFn = (
  request,
  next) => {
  // Get the token from the local storage
  const token = localStorage.getItem('token');
  // Clone the request and add the token to the request headers
  const handledRequest = token
    ? request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)})
    : request;
  console.log('Request: ', handledRequest);
  // Pass the request to the next interceptor
  return next(handledRequest);
};
