/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingInvoiceRequest = {
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

export type ListAccountingInvoiceResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingInvoiceOutput>;
};

export type ListAccountingInvoiceResponse = {
    result: ListAccountingInvoiceResponseBody;
};

/** @internal */
export const ListAccountingInvoiceRequest$inboundSchema: z.ZodType<
    ListAccountingInvoiceRequest,
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
export type ListAccountingInvoiceRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingInvoiceRequest$outboundSchema: z.ZodType<
    ListAccountingInvoiceRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingInvoiceRequest
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
export namespace ListAccountingInvoiceRequest$ {
    /** @deprecated use `ListAccountingInvoiceRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingInvoiceRequest$inboundSchema;
    /** @deprecated use `ListAccountingInvoiceRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingInvoiceRequest$outboundSchema;
    /** @deprecated use `ListAccountingInvoiceRequest$Outbound` instead. */
    export type Outbound = ListAccountingInvoiceRequest$Outbound;
}

/** @internal */
export const ListAccountingInvoiceResponseBody$inboundSchema: z.ZodType<
    ListAccountingInvoiceResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingInvoiceOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingInvoiceResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingInvoiceOutput$Outbound>;
};

/** @internal */
export const ListAccountingInvoiceResponseBody$outboundSchema: z.ZodType<
    ListAccountingInvoiceResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingInvoiceResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingInvoiceOutput$outboundSchema),
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
export namespace ListAccountingInvoiceResponseBody$ {
    /** @deprecated use `ListAccountingInvoiceResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingInvoiceResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingInvoiceResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingInvoiceResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingInvoiceResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingInvoiceResponseBody$Outbound;
}

/** @internal */
export const ListAccountingInvoiceResponse$inboundSchema: z.ZodType<
    ListAccountingInvoiceResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListAccountingInvoiceResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListAccountingInvoiceResponse$Outbound = {
    Result: ListAccountingInvoiceResponseBody$Outbound;
};

/** @internal */
export const ListAccountingInvoiceResponse$outboundSchema: z.ZodType<
    ListAccountingInvoiceResponse$Outbound,
    z.ZodTypeDef,
    ListAccountingInvoiceResponse
> = z
    .object({
        result: z.lazy(() => ListAccountingInvoiceResponseBody$outboundSchema),
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
export namespace ListAccountingInvoiceResponse$ {
    /** @deprecated use `ListAccountingInvoiceResponse$inboundSchema` instead. */
    export const inboundSchema = ListAccountingInvoiceResponse$inboundSchema;
    /** @deprecated use `ListAccountingInvoiceResponse$outboundSchema` instead. */
    export const outboundSchema = ListAccountingInvoiceResponse$outboundSchema;
    /** @deprecated use `ListAccountingInvoiceResponse$Outbound` instead. */
    export type Outbound = ListAccountingInvoiceResponse$Outbound;
}
