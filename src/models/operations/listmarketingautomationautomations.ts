/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingautomationAutomationsRequest = {
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

export type ListMarketingautomationAutomationsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationAutomationOutput>;
};

export type ListMarketingautomationAutomationsResponse = {
    result: ListMarketingautomationAutomationsResponseBody;
};

/** @internal */
export const ListMarketingautomationAutomationsRequest$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationsRequest,
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
export type ListMarketingautomationAutomationsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationAutomationsRequest$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationsRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationsRequest
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
export namespace ListMarketingautomationAutomationsRequest$ {
    /** @deprecated use `ListMarketingautomationAutomationsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationsRequest$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationsRequest$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsRequest$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationsRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationAutomationsResponseBody$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationAutomationOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingautomationAutomationsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationAutomationOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationAutomationsResponseBody$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationAutomationOutput$outboundSchema),
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
export namespace ListMarketingautomationAutomationsResponseBody$ {
    /** @deprecated use `ListMarketingautomationAutomationsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationsResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationsResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationsResponseBody$Outbound;
}

/** @internal */
export const ListMarketingautomationAutomationsResponse$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListMarketingautomationAutomationsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListMarketingautomationAutomationsResponse$Outbound = {
    Result: ListMarketingautomationAutomationsResponseBody$Outbound;
};

/** @internal */
export const ListMarketingautomationAutomationsResponse$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationsResponse$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationsResponse
> = z
    .object({
        result: z.lazy(() => ListMarketingautomationAutomationsResponseBody$outboundSchema),
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
export namespace ListMarketingautomationAutomationsResponse$ {
    /** @deprecated use `ListMarketingautomationAutomationsResponse$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationsResponse$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsResponse$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationsResponse$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationsResponse$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationsResponse$Outbound;
}
