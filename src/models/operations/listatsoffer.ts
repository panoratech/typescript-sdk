/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsOfferRequest = {
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

export type ListAtsOfferResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAtsOfferOutput>;
};

export type ListAtsOfferResponse = {
    result: ListAtsOfferResponseBody;
};

/** @internal */
export const ListAtsOfferRequest$inboundSchema: z.ZodType<
    ListAtsOfferRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListAtsOfferRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsOfferRequest$outboundSchema: z.ZodType<
    ListAtsOfferRequest$Outbound,
    z.ZodTypeDef,
    ListAtsOfferRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().optional(),
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
export namespace ListAtsOfferRequest$ {
    /** @deprecated use `ListAtsOfferRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsOfferRequest$inboundSchema;
    /** @deprecated use `ListAtsOfferRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsOfferRequest$outboundSchema;
    /** @deprecated use `ListAtsOfferRequest$Outbound` instead. */
    export type Outbound = ListAtsOfferRequest$Outbound;
}

/** @internal */
export const ListAtsOfferResponseBody$inboundSchema: z.ZodType<
    ListAtsOfferResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsOfferOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsOfferResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAtsOfferOutput$Outbound>;
};

/** @internal */
export const ListAtsOfferResponseBody$outboundSchema: z.ZodType<
    ListAtsOfferResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsOfferResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAtsOfferOutput$outboundSchema),
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
export namespace ListAtsOfferResponseBody$ {
    /** @deprecated use `ListAtsOfferResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsOfferResponseBody$inboundSchema;
    /** @deprecated use `ListAtsOfferResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsOfferResponseBody$outboundSchema;
    /** @deprecated use `ListAtsOfferResponseBody$Outbound` instead. */
    export type Outbound = ListAtsOfferResponseBody$Outbound;
}

/** @internal */
export const ListAtsOfferResponse$inboundSchema: z.ZodType<
    ListAtsOfferResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListAtsOfferResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListAtsOfferResponse$Outbound = {
    Result: ListAtsOfferResponseBody$Outbound;
};

/** @internal */
export const ListAtsOfferResponse$outboundSchema: z.ZodType<
    ListAtsOfferResponse$Outbound,
    z.ZodTypeDef,
    ListAtsOfferResponse
> = z
    .object({
        result: z.lazy(() => ListAtsOfferResponseBody$outboundSchema),
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
export namespace ListAtsOfferResponse$ {
    /** @deprecated use `ListAtsOfferResponse$inboundSchema` instead. */
    export const inboundSchema = ListAtsOfferResponse$inboundSchema;
    /** @deprecated use `ListAtsOfferResponse$outboundSchema` instead. */
    export const outboundSchema = ListAtsOfferResponse$outboundSchema;
    /** @deprecated use `ListAtsOfferResponse$Outbound` instead. */
    export type Outbound = ListAtsOfferResponse$Outbound;
}
