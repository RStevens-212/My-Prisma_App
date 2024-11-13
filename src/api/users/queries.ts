'use client';

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./actions";
import { UseQueryParams } from "@/types/common";

export type Metrics = NonNullable<NonNullable<ReturnType<typeof useGetUsersQuery>['data']>['users']>;

export function useGetUsersQuery(queryParams: UseQueryParams<typeof getUsers> | undefined = {}) {
    return useQuery({
        queryKey: ['getUsers'],
        queryFn: () => getUsers(),
    });
}