import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', '0633e20749msh25fcfa637c411a3p1ec5eajsn8eebc7d0774a');

			return headers;
		} 
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
		getSongDetails: builder.query({ query: ({ songid }) => `/v1/tracks/details?track_id=${songid}` }),
		getSongDetailsV2: builder.query({ query: ({ songid }) => `/v2/tracks/details?track_id=${songid}` }),
		getSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}` }),
		
	})
})

export const { 
	useGetTopChartsQuery,
	useGetSongDetailsQuery,
	useGetSongDetailsV2Query,
	useGetSongRelatedQuery,
} = shazamCoreApi;