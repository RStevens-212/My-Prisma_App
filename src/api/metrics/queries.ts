'use client';

import { useQuery } from "@tanstack/react-query";
import { getMetrics } from "./actions";
import { UseQueryParams } from "@/types/common";

export type Metrics = NonNullable<NonNullable<ReturnType<typeof useGetMetricsQuery>['data']>['metrics']>;

export function useGetMetricsQuery(queryParams: UseQueryParams<typeof getMetrics> | undefined = {}) {
    return useQuery({
        queryKey: ['getMetrics'],
        queryFn: () => getMetrics(queryParams),
    });
}