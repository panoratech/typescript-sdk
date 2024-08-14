/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingAutomationContactsRequest = {
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

export type ListMarketingAutomationContactsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationContactOutput>;
};

export type ListMarketingAutomationContactsResponse = {
    result: ListMarketingAutomationContactsResponseBody;
};

/** @internal */
export const ListMarketingAutomationContactsRequest$inboundSchema: z.ZodType<
    ListMarketingAutomationContactsRequest,
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
export type ListMarketingAutomationContactsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingAutomationContactsRequest$outboundSchema: z.ZodType<
    ListMarketingAutomationContactsRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingAutomationContactsRequest
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
export namespace ListMarketingAutomationContactsRequest$ {
    /** @deprecated use `ListMarketingAutomationContactsRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingAutomationContactsRequest$inboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingAutomationContactsRequest$outboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsRequest$Outbound` instead. */
    export type Outbound = ListMarketingAutomationContactsRequest$Outbound;
}

/** @internal */
export const ListMarketingAutomationContactsResponseBody$inboundSchema: z.ZodType<
    ListMarketingAutomationContactsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationContactOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListMarketingAutomationContactsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationContactOutput$Outbound>;
};

/** @internal */
export const ListMarketingAutomationContactsResponseBody$outboundSchema: z.ZodType<
    ListMarketingAutomationContactsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingAutomationContactsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedMarketingautomationContactOutput$outboundSchema),
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
export namespace ListMarketingAutomationContactsResponseBody$ {
    /** @deprecated use `ListMarketingAutomationContactsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingAutomationContactsResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingAutomationContactsResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingAutomationContactsResponseBody$Outbound;
}

/** @internal */
export const ListMarketingAutomationContactsResponse$inboundSchema: z.ZodType<
    ListMarketingAutomationContactsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListMarketingAutomationContactsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListMarketingAutomationContactsResponse$Outbound = {
    Result: ListMarketingAutomationContactsResponseBody$Outbound;
};

/** @internal */
export const ListMarketingAutomationContactsResponse$outboundSchema: z.ZodType<
    ListMarketingAutomationContactsResponse$Outbound,
    z.ZodTypeDef,
    ListMarketingAutomationContactsResponse
> = z
    .object({
        result: z.lazy(() => ListMarketingAutomationContactsResponseBody$outboundSchema),
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
export namespace ListMarketingAutomationContactsResponse$ {
    /** @deprecated use `ListMarketingAutomationContactsResponse$inboundSchema` instead. */
    export const inboundSchema = ListMarketingAutomationContactsResponse$inboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsResponse$outboundSchema` instead. */
    export const outboundSchema = ListMarketingAutomationContactsResponse$outboundSchema;
    /** @deprecated use `ListMarketingAutomationContactsResponse$Outbound` instead. */
    export type Outbound = ListMarketingAutomationContactsResponse$Outbound;
}
