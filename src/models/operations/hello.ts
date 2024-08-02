/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type HelloResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Returns a greeting message
     */
    res?: string | undefined;
};

/** @internal */
export const HelloResponse$inboundSchema: z.ZodType<HelloResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        res: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type HelloResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    res?: string | undefined;
};

/** @internal */
export const HelloResponse$outboundSchema: z.ZodType<
    HelloResponse$Outbound,
    z.ZodTypeDef,
    HelloResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        res: z.string().optional(),
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
export namespace HelloResponse$ {
    /** @deprecated use `HelloResponse$inboundSchema` instead. */
    export const inboundSchema = HelloResponse$inboundSchema;
    /** @deprecated use `HelloResponse$outboundSchema` instead. */
    export const outboundSchema = HelloResponse$outboundSchema;
    /** @deprecated use `HelloResponse$Outbound` instead. */
    export type Outbound = HelloResponse$Outbound;
}
