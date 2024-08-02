/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisPayrollRunsRequest = {
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

export type ListHrisPayrollRunsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisPayrollrunOutput>;
};

export type ListHrisPayrollRunsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListHrisPayrollRunsResponseBody | undefined;
};

/** @internal */
export const ListHrisPayrollRunsRequest$inboundSchema: z.ZodType<
    ListHrisPayrollRunsRequest,
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
export type ListHrisPayrollRunsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisPayrollRunsRequest$outboundSchema: z.ZodType<
    ListHrisPayrollRunsRequest$Outbound,
    z.ZodTypeDef,
    ListHrisPayrollRunsRequest
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
export namespace ListHrisPayrollRunsRequest$ {
    /** @deprecated use `ListHrisPayrollRunsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisPayrollRunsRequest$inboundSchema;
    /** @deprecated use `ListHrisPayrollRunsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisPayrollRunsRequest$outboundSchema;
    /** @deprecated use `ListHrisPayrollRunsRequest$Outbound` instead. */
    export type Outbound = ListHrisPayrollRunsRequest$Outbound;
}

/** @internal */
export const ListHrisPayrollRunsResponseBody$inboundSchema: z.ZodType<
    ListHrisPayrollRunsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisPayrollrunOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisPayrollRunsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisPayrollrunOutput$Outbound>;
};

/** @internal */
export const ListHrisPayrollRunsResponseBody$outboundSchema: z.ZodType<
    ListHrisPayrollRunsResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisPayrollRunsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisPayrollrunOutput$outboundSchema),
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
export namespace ListHrisPayrollRunsResponseBody$ {
    /** @deprecated use `ListHrisPayrollRunsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisPayrollRunsResponseBody$inboundSchema;
    /** @deprecated use `ListHrisPayrollRunsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisPayrollRunsResponseBody$outboundSchema;
    /** @deprecated use `ListHrisPayrollRunsResponseBody$Outbound` instead. */
    export type Outbound = ListHrisPayrollRunsResponseBody$Outbound;
}

/** @internal */
export const ListHrisPayrollRunsResponse$inboundSchema: z.ZodType<
    ListHrisPayrollRunsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListHrisPayrollRunsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListHrisPayrollRunsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListHrisPayrollRunsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListHrisPayrollRunsResponse$outboundSchema: z.ZodType<
    ListHrisPayrollRunsResponse$Outbound,
    z.ZodTypeDef,
    ListHrisPayrollRunsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListHrisPayrollRunsResponseBody$outboundSchema).optional(),
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
export namespace ListHrisPayrollRunsResponse$ {
    /** @deprecated use `ListHrisPayrollRunsResponse$inboundSchema` instead. */
    export const inboundSchema = ListHrisPayrollRunsResponse$inboundSchema;
    /** @deprecated use `ListHrisPayrollRunsResponse$outboundSchema` instead. */
    export const outboundSchema = ListHrisPayrollRunsResponse$outboundSchema;
    /** @deprecated use `ListHrisPayrollRunsResponse$Outbound` instead. */
    export type Outbound = ListHrisPayrollRunsResponse$Outbound;
}
