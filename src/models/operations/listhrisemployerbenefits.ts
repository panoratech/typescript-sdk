/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisEmployerBenefitsRequest = {
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

export type ListHrisEmployerBenefitsResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisEmployerbenefitOutput>;
};

export type ListHrisEmployerBenefitsResponse = {
    result: ListHrisEmployerBenefitsResponseBody;
};

/** @internal */
export const ListHrisEmployerBenefitsRequest$inboundSchema: z.ZodType<
    ListHrisEmployerBenefitsRequest,
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
export type ListHrisEmployerBenefitsRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisEmployerBenefitsRequest$outboundSchema: z.ZodType<
    ListHrisEmployerBenefitsRequest$Outbound,
    z.ZodTypeDef,
    ListHrisEmployerBenefitsRequest
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
export namespace ListHrisEmployerBenefitsRequest$ {
    /** @deprecated use `ListHrisEmployerBenefitsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployerBenefitsRequest$inboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployerBenefitsRequest$outboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsRequest$Outbound` instead. */
    export type Outbound = ListHrisEmployerBenefitsRequest$Outbound;
}

/** @internal */
export const ListHrisEmployerBenefitsResponseBody$inboundSchema: z.ZodType<
    ListHrisEmployerBenefitsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmployerbenefitOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisEmployerBenefitsResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisEmployerbenefitOutput$Outbound>;
};

/** @internal */
export const ListHrisEmployerBenefitsResponseBody$outboundSchema: z.ZodType<
    ListHrisEmployerBenefitsResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisEmployerBenefitsResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisEmployerbenefitOutput$outboundSchema),
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
export namespace ListHrisEmployerBenefitsResponseBody$ {
    /** @deprecated use `ListHrisEmployerBenefitsResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployerBenefitsResponseBody$inboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployerBenefitsResponseBody$outboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsResponseBody$Outbound` instead. */
    export type Outbound = ListHrisEmployerBenefitsResponseBody$Outbound;
}

/** @internal */
export const ListHrisEmployerBenefitsResponse$inboundSchema: z.ZodType<
    ListHrisEmployerBenefitsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => ListHrisEmployerBenefitsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListHrisEmployerBenefitsResponse$Outbound = {
    Result: ListHrisEmployerBenefitsResponseBody$Outbound;
};

/** @internal */
export const ListHrisEmployerBenefitsResponse$outboundSchema: z.ZodType<
    ListHrisEmployerBenefitsResponse$Outbound,
    z.ZodTypeDef,
    ListHrisEmployerBenefitsResponse
> = z
    .object({
        result: z.lazy(() => ListHrisEmployerBenefitsResponseBody$outboundSchema),
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
export namespace ListHrisEmployerBenefitsResponse$ {
    /** @deprecated use `ListHrisEmployerBenefitsResponse$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmployerBenefitsResponse$inboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsResponse$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmployerBenefitsResponse$outboundSchema;
    /** @deprecated use `ListHrisEmployerBenefitsResponse$Outbound` instead. */
    export type Outbound = ListHrisEmployerBenefitsResponse$Outbound;
}
