/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTicketingCommentsRequest = {
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

export type ListTicketingCommentsResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedTicketingCommentOutput>;
};

export type ListTicketingCommentsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListTicketingCommentsResponseBody | undefined;
};

/** @internal */
export const ListTicketingCommentsRequest$inboundSchema: z.ZodType<
    ListTicketingCommentsRequest,
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
export type ListTicketingCommentsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListTicketingCommentsRequest$outboundSchema: z.ZodType<
    ListTicketingCommentsRequest$Outbound,
    z.ZodTypeDef,
    ListTicketingCommentsRequest
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
export namespace ListTicketingCommentsRequest$ {
    /** @deprecated use `ListTicketingCommentsRequest$inboundSchema` instead. */
    export const inboundSchema = ListTicketingCommentsRequest$inboundSchema;
    /** @deprecated use `ListTicketingCommentsRequest$outboundSchema` instead. */
    export const outboundSchema = ListTicketingCommentsRequest$outboundSchema;
    /** @deprecated use `ListTicketingCommentsRequest$Outbound` instead. */
    export type Outbound = ListTicketingCommentsRequest$Outbound;
}

/** @internal */
export const ListTicketingCommentsResponseBody$inboundSchema: z.ZodType<
    ListTicketingCommentsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedTicketingCommentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListTicketingCommentsResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedTicketingCommentOutput$Outbound>;
};

/** @internal */
export const ListTicketingCommentsResponseBody$outboundSchema: z.ZodType<
    ListTicketingCommentsResponseBody$Outbound,
    z.ZodTypeDef,
    ListTicketingCommentsResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedTicketingCommentOutput$outboundSchema),
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
export namespace ListTicketingCommentsResponseBody$ {
    /** @deprecated use `ListTicketingCommentsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTicketingCommentsResponseBody$inboundSchema;
    /** @deprecated use `ListTicketingCommentsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTicketingCommentsResponseBody$outboundSchema;
    /** @deprecated use `ListTicketingCommentsResponseBody$Outbound` instead. */
    export type Outbound = ListTicketingCommentsResponseBody$Outbound;
}

/** @internal */
export const ListTicketingCommentsResponse$inboundSchema: z.ZodType<
    ListTicketingCommentsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListTicketingCommentsResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListTicketingCommentsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListTicketingCommentsResponseBody$Outbound | undefined;
};

/** @internal */
export const ListTicketingCommentsResponse$outboundSchema: z.ZodType<
    ListTicketingCommentsResponse$Outbound,
    z.ZodTypeDef,
    ListTicketingCommentsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListTicketingCommentsResponseBody$outboundSchema).optional(),
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
export namespace ListTicketingCommentsResponse$ {
    /** @deprecated use `ListTicketingCommentsResponse$inboundSchema` instead. */
    export const inboundSchema = ListTicketingCommentsResponse$inboundSchema;
    /** @deprecated use `ListTicketingCommentsResponse$outboundSchema` instead. */
    export const outboundSchema = ListTicketingCommentsResponse$outboundSchema;
    /** @deprecated use `ListTicketingCommentsResponse$Outbound` instead. */
    export type Outbound = ListTicketingCommentsResponse$Outbound;
}
