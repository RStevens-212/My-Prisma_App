'use client';

import { useQuery } from "react-query";
import { getFavorites } from "./actions";
import { UseQueryParams } from "@/types/common";

export type Favorites = NonNullable<NonNullable<ReturnType<typeof useGetFavoritesQuery>['data']>['favorites']>;

export function useGetFavoritesQuery() {
    return useQuery({
        queryKey: ['getFavorites'],
        queryFn: () => getFavorites(),
    });
}