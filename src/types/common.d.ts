import { UseQueryOptions } from "react-query";

export type Maybe<T> = T | null | undefined;

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type ExcludesFalse = <T>(x: T | false) => x is T;

export type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partua<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

export type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type UseQueryParams <T extends Function> = Omit<ParameterTypes<T>>;

export type useActionVariables <T extends Function> = ParameterTypes<T>;
