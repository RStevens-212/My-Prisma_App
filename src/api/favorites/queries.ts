'use client';

import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "./actions";
import { UseQueryParams } from "@/types/common";

export type Metrics = NonNullable<NonNullable<ReturnType<typeof useGetFavoritesQuery>['data']>['favorites']>;

export function useGetFavoritesQuery(queryParams: UseQueryParams<typeof getFavorites> | undefined = {}) {
    return useQuery({
        queryKey: ['getMetrics'],
        queryFn: () => getFavorites(queryParams),
    });
}