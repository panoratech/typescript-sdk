/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type StatusRequest = {
    vertical: string;
};

export type StatusResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const StatusRequest$inboundSchema: z.ZodType<StatusRequest, z.ZodTypeDef, unknown> =
    z.object({
        vertical: z.string(),
    });

/** @internal */
export type StatusRequest$Outbound = {
    vertical: string;
};

/** @internal */
export const StatusRequest$outboundSchema: z.ZodType<
    StatusRequest$Outbound,
    z.ZodTypeDef,
    StatusRequest
> = z.object({
    vertical: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusRequest$ {
    /** @deprecated use `StatusRequest$inboundSchema` instead. */
    export const inboundSchema = StatusRequest$inboundSchema;
    /** @deprecated use `StatusRequest$outboundSchema` instead. */
    export const outboundSchema = StatusRequest$outboundSchema;
    /** @deprecated use `StatusRequest$Outbound` instead. */
    export type Outbound = StatusRequest$Outbound;
}

/** @internal */
export const StatusResponse$inboundSchema: z.ZodType<StatusResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type StatusResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const StatusResponse$outboundSchema: z.ZodType<
    StatusResponse$Outbound,
    z.ZodTypeDef,
    StatusResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
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
export namespace StatusResponse$ {
    /** @deprecated use `StatusResponse$inboundSchema` instead. */
    export const inboundSchema = StatusResponse$inboundSchema;
    /** @deprecated use `StatusResponse$outboundSchema` instead. */
    export const outboundSchema = StatusResponse$outboundSchema;
    /** @deprecated use `StatusResponse$Outbound` instead. */
    export type Outbound = StatusResponse$Outbound;
}
