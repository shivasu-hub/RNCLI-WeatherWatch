import {api} from '../../api';
import getLocation from './getLocation';

export const locationApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    getLocation: getLocation(build),
  }),
  overrideExisting: true,
});

export const {useLazyGetLocationQuery} = locationApi;
