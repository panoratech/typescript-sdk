/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAccountingBalanceSheetsRequest = {
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

export type ListAccountingBalanceSheetsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedAccountingBalancesheetOutput>;
};

/** @internal */
export const ListAccountingBalanceSheetsRequest$inboundSchema: z.ZodType<
    ListAccountingBalanceSheetsRequest,
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
export type ListAccountingBalanceSheetsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAccountingBalanceSheetsRequest$outboundSchema: z.ZodType<
    ListAccountingBalanceSheetsRequest$Outbound,
    z.ZodTypeDef,
    ListAccountingBalanceSheetsRequest
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
export namespace ListAccountingBalanceSheetsRequest$ {
    /** @deprecated use `ListAccountingBalanceSheetsRequest$inboundSchema` instead. */
    export const inboundSchema = ListAccountingBalanceSheetsRequest$inboundSchema;
    /** @deprecated use `ListAccountingBalanceSheetsRequest$outboundSchema` instead. */
    export const outboundSchema = ListAccountingBalanceSheetsRequest$outboundSchema;
    /** @deprecated use `ListAccountingBalanceSheetsRequest$Outbound` instead. */
    export type Outbound = ListAccountingBalanceSheetsRequest$Outbound;
}

/** @internal */
export const ListAccountingBalanceSheetsResponseBody$inboundSchema: z.ZodType<
    ListAccountingBalanceSheetsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingBalancesheetOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAccountingBalanceSheetsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedAccountingBalancesheetOutput$Outbound>;
};

/** @internal */
export const ListAccountingBalanceSheetsResponseBody$outboundSchema: z.ZodType<
    ListAccountingBalanceSheetsResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingBalanceSheetsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedAccountingBalancesheetOutput$outboundSchema),
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
export namespace ListAccountingBalanceSheetsResponseBody$ {
    /** @deprecated use `ListAccountingBalanceSheetsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAccountingBalanceSheetsResponseBody$inboundSchema;
    /** @deprecated use `ListAccountingBalanceSheetsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAccountingBalanceSheetsResponseBody$outboundSchema;
    /** @deprecated use `ListAccountingBalanceSheetsResponseBody$Outbound` instead. */
    export type Outbound = ListAccountingBalanceSheetsResponseBody$Outbound;
}
