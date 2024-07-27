/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingItemRequest = {
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

export type ListAccountingItemResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedAccountingItemOutput>;
};

export type ListAccountingItemResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAccountingItemResponseBody | undefined;
};

/** @internal */
export const ListAccountingItemRequest$inboundSchema: z.ZodType<
    ListAccountingItemRequest,
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
export type ListAccountingItemRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingItemRequest$outboundSchema: z.ZodType<
    ListAccountingItemRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingItemRequest
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
export namespace ListAccountingItemRequest$ {
    /** @deprecated use `ListAccountingItemRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingItemRequest$inboundSchema;
    /** @deprecated use `ListAccountingItemRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingItemRequest$outboundSchema;
    /** @deprecated use `ListAccountingItemRequest$Outbound` instead. */
    export type Outbound = ListAccountingItemRequest$Outbound;
}

/** @internal */
export const ListAccountingItemResponseBody$inboundSchema: z.ZodType<
    ListAccountingItemResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedAccountingItemOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingItemResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedAccountingItemOutput$Outbound>;
};

/** @internal */
export const ListAccountingItemResponseBody$outboundSchema: z.ZodType<
    ListAccountingItemResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingItemResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedAccountingItemOutput$outboundSchema),
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
export namespace ListAccountingItemResponseBody$ {
    /** @deprecated use `ListAccountingItemResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingItemResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingItemResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingItemResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingItemResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingItemResponseBody$Outbound;
}

/** @internal */
export const ListAccountingItemResponse$inboundSchema: z.ZodType<
    ListAccountingItemResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAccountingItemResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAccountingItemResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAccountingItemResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAccountingItemResponse$outboundSchema: z.ZodType<
    ListAccountingItemResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingItemResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAccountingItemResponseBody$outboundSchema).optional(),
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
export namespace ListAccountingItemResponse$ {
    /** @deprecated use `ListAccountingItemResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingItemResponse$inboundSchema;
    /** @deprecated use `ListAccountingItemResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingItemResponse$outboundSchema;
    /** @deprecated use `ListAccountingItemResponse$Outbound` instead. */
    export type Outbound = ListAccountingItemResponse$Outbound;
}
