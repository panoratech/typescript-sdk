/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTicketingTagsRequest = {
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

export type ListTicketingTagsResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedTicketingTagOutput>;
};

export type ListTicketingTagsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListTicketingTagsResponseBody | undefined;
};

/** @internal */
export const ListTicketingTagsRequest$inboundSchema: z.ZodType<
    ListTicketingTagsRequest,
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
export type ListTicketingTagsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListTicketingTagsRequest$outboundSchema: z.ZodType<
    ListTicketingTagsRequest$Outbound,
    z.ZodTypeDef,
    ListTicketingTagsRequest
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
export namespace ListTicketingTagsRequest$ {
    /** @deprecated use `ListTicketingTagsRequest$inboundSchema` instead. */
    export const inboundSchema = ListTicketingTagsRequest$inboundSchema;
    /** @deprecated use `ListTicketingTagsRequest$outboundSchema` instead. */
    export const outboundSchema = ListTicketingTagsRequest$outboundSchema;
    /** @deprecated use `ListTicketingTagsRequest$Outbound` instead. */
    export type Outbound = ListTicketingTagsRequest$Outbound;
}

/** @internal */
export const ListTicketingTagsResponseBody$inboundSchema: z.ZodType<
    ListTicketingTagsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedTicketingTagOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListTicketingTagsResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedTicketingTagOutput$Outbound>;
};

/** @internal */
export const ListTicketingTagsResponseBody$outboundSchema: z.ZodType<
    ListTicketingTagsResponseBody$Outbound,
    z.ZodTypeDef,
    ListTicketingTagsResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedTicketingTagOutput$outboundSchema),
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
export namespace ListTicketingTagsResponseBody$ {
    /** @deprecated use `ListTicketingTagsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTicketingTagsResponseBody$inboundSchema;
    /** @deprecated use `ListTicketingTagsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTicketingTagsResponseBody$outboundSchema;
    /** @deprecated use `ListTicketingTagsResponseBody$Outbound` instead. */
    export type Outbound = ListTicketingTagsResponseBody$Outbound;
}

/** @internal */
export const ListTicketingTagsResponse$inboundSchema: z.ZodType<
    ListTicketingTagsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListTicketingTagsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListTicketingTagsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListTicketingTagsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListTicketingTagsResponse$outboundSchema: z.ZodType<
    ListTicketingTagsResponse$Outbound,
    z.ZodTypeDef,
    ListTicketingTagsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListTicketingTagsResponseBody$outboundSchema).optional(),
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
export namespace ListTicketingTagsResponse$ {
    /** @deprecated use `ListTicketingTagsResponse$inboundSchema` instead. */
    export const inboundSchema = ListTicketingTagsResponse$inboundSchema;
    /** @deprecated use `ListTicketingTagsResponse$outboundSchema` instead. */
    export const outboundSchema = ListTicketingTagsResponse$outboundSchema;
    /** @deprecated use `ListTicketingTagsResponse$Outbound` instead. */
    export type Outbound = ListTicketingTagsResponse$Outbound;
}
