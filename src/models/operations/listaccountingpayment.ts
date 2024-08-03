/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingPaymentRequest = {
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

export type ListAccountingPaymentResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingPaymentOutput>;
};

/** @internal */
export const ListAccountingPaymentRequest$inboundSchema: z.ZodType<
    ListAccountingPaymentRequest,
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
export type ListAccountingPaymentRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingPaymentRequest$outboundSchema: z.ZodType<
    ListAccountingPaymentRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingPaymentRequest
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
export namespace ListAccountingPaymentRequest$ {
    /** @deprecated use `ListAccountingPaymentRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingPaymentRequest$inboundSchema;
    /** @deprecated use `ListAccountingPaymentRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingPaymentRequest$outboundSchema;
    /** @deprecated use `ListAccountingPaymentRequest$Outbound` instead. */
    export type Outbound = ListAccountingPaymentRequest$Outbound;
}

/** @internal */
export const ListAccountingPaymentResponseBody$inboundSchema: z.ZodType<
    ListAccountingPaymentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingPaymentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingPaymentResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingPaymentOutput$Outbound>;
};

/** @internal */
export const ListAccountingPaymentResponseBody$outboundSchema: z.ZodType<
    ListAccountingPaymentResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingPaymentResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingPaymentOutput$outboundSchema),
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
export namespace ListAccountingPaymentResponseBody$ {
    /** @deprecated use `ListAccountingPaymentResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingPaymentResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingPaymentResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingPaymentResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingPaymentResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingPaymentResponseBody$Outbound;
}
