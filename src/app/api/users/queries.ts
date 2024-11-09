'use client';

import { useQuery } from "react-query";
import { getUsers } from "./actions";

export type Users = NonNullable<NonNullable<ReturnType<typeof useGetUsersQuery>['data']>['users']>;

export function useGetUsersQuery() {
    return useQuery({
        queryKey: ['getUsers'],
        queryFn: () => getUsers(),
    });
}