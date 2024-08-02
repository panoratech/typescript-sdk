/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListMarketingautomationAutomationRequest = {
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

export type ListMarketingautomationAutomationResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedMarketingautomationAutomationOutput>;
};

export type ListMarketingautomationAutomationResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListMarketingautomationAutomationResponseBody | undefined;
};

/** @internal */
export const ListMarketingautomationAutomationRequest$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationRequest,
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
export type ListMarketingautomationAutomationRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationAutomationRequest$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationRequest$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationRequest
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
export namespace ListMarketingautomationAutomationRequest$ {
    /** @deprecated use `ListMarketingautomationAutomationRequest$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationRequest$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationRequest$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationRequest$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationRequest$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationAutomationResponseBody$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationResponseBody,
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
export type ListMarketingautomationAutomationResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedMarketingautomationAutomationOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationAutomationResponseBody$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationResponseBody
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
export namespace ListMarketingautomationAutomationResponseBody$ {
    /** @deprecated use `ListMarketingautomationAutomationResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationResponseBody$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationResponseBody$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationResponseBody$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationResponseBody$Outbound;
}

/** @internal */
export const ListMarketingautomationAutomationResponse$inboundSchema: z.ZodType<
    ListMarketingautomationAutomationResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z
            .lazy(() => ListMarketingautomationAutomationResponseBody$inboundSchema)
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListMarketingautomationAutomationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListMarketingautomationAutomationResponseBody$Outbound | undefined;
};

/** @internal */
export const ListMarketingautomationAutomationResponse$outboundSchema: z.ZodType<
    ListMarketingautomationAutomationResponse$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationAutomationResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z
            .lazy(() => ListMarketingautomationAutomationResponseBody$outboundSchema)
            .optional(),
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
export namespace ListMarketingautomationAutomationResponse$ {
    /** @deprecated use `ListMarketingautomationAutomationResponse$inboundSchema` instead. */
    export const inboundSchema = ListMarketingautomationAutomationResponse$inboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationResponse$outboundSchema` instead. */
    export const outboundSchema = ListMarketingautomationAutomationResponse$outboundSchema;
    /** @deprecated use `ListMarketingautomationAutomationResponse$Outbound` instead. */
    export type Outbound = ListMarketingautomationAutomationResponse$Outbound;
}
