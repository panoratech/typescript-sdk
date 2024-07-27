/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTicketingUsersRequest = {
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

export type ListTicketingUsersResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedTicketingUserOutput>;
};

export type ListTicketingUsersResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListTicketingUsersResponseBody | undefined;
};

/** @internal */
export const ListTicketingUsersRequest$inboundSchema: z.ZodType<
    ListTicketingUsersRequest,
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
export type ListTicketingUsersRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListTicketingUsersRequest$outboundSchema: z.ZodType<
    ListTicketingUsersRequest$Outbound,
    z.ZodTypeDef,
    ListTicketingUsersRequest
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
export namespace ListTicketingUsersRequest$ {
    /** @deprecated use `ListTicketingUsersRequest$inboundSchema` instead. */
    export const inboundSchema = ListTicketingUsersRequest$inboundSchema;
    /** @deprecated use `ListTicketingUsersRequest$outboundSchema` instead. */
    export const outboundSchema = ListTicketingUsersRequest$outboundSchema;
    /** @deprecated use `ListTicketingUsersRequest$Outbound` instead. */
    export type Outbound = ListTicketingUsersRequest$Outbound;
}

/** @internal */
export const ListTicketingUsersResponseBody$inboundSchema: z.ZodType<
    ListTicketingUsersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedTicketingUserOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListTicketingUsersResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedTicketingUserOutput$Outbound>;
};

/** @internal */
export const ListTicketingUsersResponseBody$outboundSchema: z.ZodType<
    ListTicketingUsersResponseBody$Outbound,
    z.ZodTypeDef,
    ListTicketingUsersResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedTicketingUserOutput$outboundSchema),
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
export namespace ListTicketingUsersResponseBody$ {
    /** @deprecated use `ListTicketingUsersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListTicketingUsersResponseBody$inboundSchema;
    /** @deprecated use `ListTicketingUsersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListTicketingUsersResponseBody$outboundSchema;
    /** @deprecated use `ListTicketingUsersResponseBody$Outbound` instead. */
    export type Outbound = ListTicketingUsersResponseBody$Outbound;
}

/** @internal */
export const ListTicketingUsersResponse$inboundSchema: z.ZodType<
    ListTicketingUsersResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListTicketingUsersResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListTicketingUsersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListTicketingUsersResponseBody$Outbound | undefined;
};

/** @internal */
export const ListTicketingUsersResponse$outboundSchema: z.ZodType<
    ListTicketingUsersResponse$Outbound,
    z.ZodTypeDef,
    ListTicketingUsersResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListTicketingUsersResponseBody$outboundSchema).optional(),
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
export namespace ListTicketingUsersResponse$ {
    /** @deprecated use `ListTicketingUsersResponse$inboundSchema` instead. */
    export const inboundSchema = ListTicketingUsersResponse$inboundSchema;
    /** @deprecated use `ListTicketingUsersResponse$outboundSchema` instead. */
    export const outboundSchema = ListTicketingUsersResponse$outboundSchema;
    /** @deprecated use `ListTicketingUsersResponse$Outbound` instead. */
    export type Outbound = ListTicketingUsersResponse$Outbound;
}
