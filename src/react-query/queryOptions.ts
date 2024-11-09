import type { UseQueryOptions } from "react-query";

export function getNoRefecthOption<TResult, TVariables, TError = unknown>() {
    const getNoRefecthOption: UseQueryOptions<TResult, TError, TResult, any[]> = {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    };

    return getNoRefecthOption;
}