'use client';

import { useQuery } from "react-query";
import { getUserPreferences } from "./actions";

export type Users = NonNullable<NonNullable<ReturnType<typeof useGetUsersPreferencesQuery>['data']>['preferences']>;

export function useGetUsersPreferencesQuery() {
    return useQuery({
        queryKey: ['getUserPreferences'],
        queryFn: () => getUserPreferences(),
    });
}