/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingAutomationEventsRequest = {
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

export type ListMarketingAutomationEventsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationEventOutput>;
};

/** @internal */
export const ListMarketingAutomationEventsRequest$inboundSchema: z.ZodType<
    ListMarketingAutomationEventsRequest,
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
export type ListMarketingAutomationEventsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingAutomationEventsRequest$outboundSchema: z.ZodType<
    ListMarketingAutomationEventsRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingAutomationEventsRequest
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
export namespace ListMarketingAutomationEventsRequest$ {
    /** @deprecated use `ListMarketingAutomationEventsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingAutomationEventsRequest$inboundSchema;
    /** @deprecated use `ListMarketingAutomationEventsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingAutomationEventsRequest$outboundSchema;
    /** @deprecated use `ListMarketingAutomationEventsRequest$Outbound` instead. */
    export type Outbound = ListMarketingAutomationEventsRequest$Outbound;
}

/** @internal */
export const ListMarketingAutomationEventsResponseBody$inboundSchema: z.ZodType<
    ListMarketingAutomationEventsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationEventOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingAutomationEventsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationEventOutput$Outbound>;
};

/** @internal */
export const ListMarketingAutomationEventsResponseBody$outboundSchema: z.ZodType<
    ListMarketingAutomationEventsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingAutomationEventsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationEventOutput$outboundSchema),
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
export namespace ListMarketingAutomationEventsResponseBody$ {
    /** @deprecated use `ListMarketingAutomationEventsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingAutomationEventsResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingAutomationEventsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingAutomationEventsResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingAutomationEventsResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingAutomationEventsResponseBody$Outbound;
}
