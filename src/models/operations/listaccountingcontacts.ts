/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingContactsRequest = {
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

export type ListAccountingContactsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingContactOutput>;
};

export type ListAccountingContactsResponse = {
    result: ListAccountingContactsResponseBody;
};

/** @internal */
export const ListAccountingContactsRequest$inboundSchema: z.ZodType<
    ListAccountingContactsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(30),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListAccountingContactsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingContactsRequest$outboundSchema: z.ZodType<
    ListAccountingContactsRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingContactsRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(30),
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
export namespace ListAccountingContactsRequest$ {
    /** @deprecated use `ListAccountingContactsRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingContactsRequest$inboundSchema;
    /** @deprecated use `ListAccountingContactsRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingContactsRequest$outboundSchema;
    /** @deprecated use `ListAccountingContactsRequest$Outbound` instead. */
    export type Outbound = ListAccountingContactsRequest$Outbound;
}

/** @internal */
export const ListAccountingContactsResponseBody$inboundSchema: z.ZodType<
    ListAccountingContactsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingContactOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingContactsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingContactOutput$Outbound>;
};

/** @internal */
export const ListAccountingContactsResponseBody$outboundSchema: z.ZodType<
    ListAccountingContactsResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingContactsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingContactOutput$outboundSchema),
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
export namespace ListAccountingContactsResponseBody$ {
    /** @deprecated use `ListAccountingContactsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingContactsResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingContactsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingContactsResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingContactsResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingContactsResponseBody$Outbound;
}

/** @internal */
export const ListAccountingContactsResponse$inboundSchema: z.ZodType<
    ListAccountingContactsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListAccountingContactsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListAccountingContactsResponse$Outbound = {
    Result: ListAccountingContactsResponseBody$Outbound;
};

/** @internal */
export const ListAccountingContactsResponse$outboundSchema: z.ZodType<
    ListAccountingContactsResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingContactsResponse
> = z
    .object({
        result: z.lazy(() => ListAccountingContactsResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingContactsResponse$ {
    /** @deprecated use `ListAccountingContactsResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingContactsResponse$inboundSchema;
    /** @deprecated use `ListAccountingContactsResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingContactsResponse$outboundSchema;
    /** @deprecated use `ListAccountingContactsResponse$Outbound` instead. */
    export type Outbound = ListAccountingContactsResponse$Outbound;
}
