/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmCompanyRequest = {
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

export type ListCrmCompanyResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedCrmCompanyOutput>;
};

export type ListCrmCompanyResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListCrmCompanyResponseBody | undefined;
};

/** @internal */
export const ListCrmCompanyRequest$inboundSchema: z.ZodType<
    ListCrmCompanyRequest,
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
export type ListCrmCompanyRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmCompanyRequest$outboundSchema: z.ZodType<
    ListCrmCompanyRequest$Outbound,
    z.ZodTypeDef,
    ListCrmCompanyRequest
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
export namespace ListCrmCompanyRequest$ {
    /** @deprecated use `ListCrmCompanyRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmCompanyRequest$inboundSchema;
    /** @deprecated use `ListCrmCompanyRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmCompanyRequest$outboundSchema;
    /** @deprecated use `ListCrmCompanyRequest$Outbound` instead. */
    export type Outbound = ListCrmCompanyRequest$Outbound;
}

/** @internal */
export const ListCrmCompanyResponseBody$inboundSchema: z.ZodType<
    ListCrmCompanyResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmCompanyOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmCompanyResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedCrmCompanyOutput$Outbound>;
};

/** @internal */
export const ListCrmCompanyResponseBody$outboundSchema: z.ZodType<
    ListCrmCompanyResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmCompanyResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedCrmCompanyOutput$outboundSchema),
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
export namespace ListCrmCompanyResponseBody$ {
    /** @deprecated use `ListCrmCompanyResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmCompanyResponseBody$inboundSchema;
    /** @deprecated use `ListCrmCompanyResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmCompanyResponseBody$outboundSchema;
    /** @deprecated use `ListCrmCompanyResponseBody$Outbound` instead. */
    export type Outbound = ListCrmCompanyResponseBody$Outbound;
}

/** @internal */
export const ListCrmCompanyResponse$inboundSchema: z.ZodType<
    ListCrmCompanyResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListCrmCompanyResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListCrmCompanyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListCrmCompanyResponseBody$Outbound | undefined;
};

/** @internal */
export const ListCrmCompanyResponse$outboundSchema: z.ZodType<
    ListCrmCompanyResponse$Outbound,
    z.ZodTypeDef,
    ListCrmCompanyResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListCrmCompanyResponseBody$outboundSchema).optional(),
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
export namespace ListCrmCompanyResponse$ {
    /** @deprecated use `ListCrmCompanyResponse$inboundSchema` instead. */
    export const inboundSchema = ListCrmCompanyResponse$inboundSchema;
    /** @deprecated use `ListCrmCompanyResponse$outboundSchema` instead. */
    export const outboundSchema = ListCrmCompanyResponse$outboundSchema;
    /** @deprecated use `ListCrmCompanyResponse$Outbound` instead. */
    export type Outbound = ListCrmCompanyResponse$Outbound;
}
