/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmStagesRequest = {
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

export type ListCrmStagesResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmStageOutput>;
};

/** @internal */
export const ListCrmStagesRequest$inboundSchema: z.ZodType<
    ListCrmStagesRequest,
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
export type ListCrmStagesRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmStagesRequest$outboundSchema: z.ZodType<
    ListCrmStagesRequest$Outbound,
    z.ZodTypeDef,
    ListCrmStagesRequest
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
export namespace ListCrmStagesRequest$ {
    /** @deprecated use `ListCrmStagesRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmStagesRequest$inboundSchema;
    /** @deprecated use `ListCrmStagesRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmStagesRequest$outboundSchema;
    /** @deprecated use `ListCrmStagesRequest$Outbound` instead. */
    export type Outbound = ListCrmStagesRequest$Outbound;
}

/** @internal */
export const ListCrmStagesResponseBody$inboundSchema: z.ZodType<
    ListCrmStagesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmStageOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmStagesResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmStageOutput$Outbound>;
};

/** @internal */
export const ListCrmStagesResponseBody$outboundSchema: z.ZodType<
    ListCrmStagesResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmStagesResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmStageOutput$outboundSchema),
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
export namespace ListCrmStagesResponseBody$ {
    /** @deprecated use `ListCrmStagesResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmStagesResponseBody$inboundSchema;
    /** @deprecated use `ListCrmStagesResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmStagesResponseBody$outboundSchema;
    /** @deprecated use `ListCrmStagesResponseBody$Outbound` instead. */
    export type Outbound = ListCrmStagesResponseBody$Outbound;
}
