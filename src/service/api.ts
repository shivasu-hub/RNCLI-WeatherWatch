const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/';

import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: GEOCODING_API_URL,
  prepareHeaders: () => {},
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  console.log('>>>>>>result', {
    argsStringify: JSON.stringify(args),
    resultStringfy: result.data && JSON.stringify(result.data),
    args,
    result,
    error: result.error,
  });
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
});
