/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingAccountsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type ListAccountingAccountsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingAccountOutput>;
};

export type ListAccountingAccountsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAccountingAccountsResponseBody | undefined;
};

/** @internal */
export const ListAccountingAccountsRequest$inboundSchema: z.ZodType<
    ListAccountingAccountsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListAccountingAccountsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingAccountsRequest$outboundSchema: z.ZodType<
    ListAccountingAccountsRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingAccountsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingAccountsRequest$ {
    /** @deprecated use `ListAccountingAccountsRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingAccountsRequest$inboundSchema;
    /** @deprecated use `ListAccountingAccountsRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingAccountsRequest$outboundSchema;
    /** @deprecated use `ListAccountingAccountsRequest$Outbound` instead. */
    export type Outbound = ListAccountingAccountsRequest$Outbound;
}

/** @internal */
export const ListAccountingAccountsResponseBody$inboundSchema: z.ZodType<
    ListAccountingAccountsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingAccountOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingAccountsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingAccountOutput$Outbound>;
};

/** @internal */
export const ListAccountingAccountsResponseBody$outboundSchema: z.ZodType<
    ListAccountingAccountsResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingAccountsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingAccountOutput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prevCursor: "prev_cursor",
            nextCursor: "next_cursor",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingAccountsResponseBody$ {
    /** @deprecated use `ListAccountingAccountsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingAccountsResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingAccountsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingAccountsResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingAccountsResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingAccountsResponseBody$Outbound;
}

/** @internal */
export const ListAccountingAccountsResponse$inboundSchema: z.ZodType<
    ListAccountingAccountsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAccountingAccountsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAccountingAccountsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAccountingAccountsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAccountingAccountsResponse$outboundSchema: z.ZodType<
    ListAccountingAccountsResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingAccountsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAccountingAccountsResponseBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingAccountsResponse$ {
    /** @deprecated use `ListAccountingAccountsResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingAccountsResponse$inboundSchema;
    /** @deprecated use `ListAccountingAccountsResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingAccountsResponse$outboundSchema;
    /** @deprecated use `ListAccountingAccountsResponse$Outbound` instead. */
    export type Outbound = ListAccountingAccountsResponse$Outbound;
}
