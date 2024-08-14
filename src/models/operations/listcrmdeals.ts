/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmDealsRequest = {
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

export type ListCrmDealsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmDealOutput>;
};

export type ListCrmDealsResponse = {
    result: ListCrmDealsResponseBody;
};

/** @internal */
export const ListCrmDealsRequest$inboundSchema: z.ZodType<
    ListCrmDealsRequest,
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
export type ListCrmDealsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmDealsRequest$outboundSchema: z.ZodType<
    ListCrmDealsRequest$Outbound,
    z.ZodTypeDef,
    ListCrmDealsRequest
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
export namespace ListCrmDealsRequest$ {
    /** @deprecated use `ListCrmDealsRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmDealsRequest$inboundSchema;
    /** @deprecated use `ListCrmDealsRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmDealsRequest$outboundSchema;
    /** @deprecated use `ListCrmDealsRequest$Outbound` instead. */
    export type Outbound = ListCrmDealsRequest$Outbound;
}

/** @internal */
export const ListCrmDealsResponseBody$inboundSchema: z.ZodType<
    ListCrmDealsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmDealOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmDealsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmDealOutput$Outbound>;
};

/** @internal */
export const ListCrmDealsResponseBody$outboundSchema: z.ZodType<
    ListCrmDealsResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmDealsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmDealOutput$outboundSchema),
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
export namespace ListCrmDealsResponseBody$ {
    /** @deprecated use `ListCrmDealsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmDealsResponseBody$inboundSchema;
    /** @deprecated use `ListCrmDealsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmDealsResponseBody$outboundSchema;
    /** @deprecated use `ListCrmDealsResponseBody$Outbound` instead. */
    export type Outbound = ListCrmDealsResponseBody$Outbound;
}

/** @internal */
export const ListCrmDealsResponse$inboundSchema: z.ZodType<
    ListCrmDealsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListCrmDealsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListCrmDealsResponse$Outbound = {
    Result: ListCrmDealsResponseBody$Outbound;
};

/** @internal */
export const ListCrmDealsResponse$outboundSchema: z.ZodType<
    ListCrmDealsResponse$Outbound,
    z.ZodTypeDef,
    ListCrmDealsResponse
> = z
    .object({
        result: z.lazy(() => ListCrmDealsResponseBody$outboundSchema),
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
export namespace ListCrmDealsResponse$ {
    /** @deprecated use `ListCrmDealsResponse$inboundSchema` instead. */
    export const inboundSchema = ListCrmDealsResponse$inboundSchema;
    /** @deprecated use `ListCrmDealsResponse$outboundSchema` instead. */
    export const outboundSchema = ListCrmDealsResponse$outboundSchema;
    /** @deprecated use `ListCrmDealsResponse$Outbound` instead. */
    export type Outbound = ListCrmDealsResponse$Outbound;
}
