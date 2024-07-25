/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ResyncResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const ResyncResponse$inboundSchema: z.ZodType<ResyncResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ResyncResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const ResyncResponse$outboundSchema: z.ZodType<
    ResyncResponse$Outbound,
    z.ZodTypeDef,
    ResyncResponse
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
export namespace ResyncResponse$ {
    /** @deprecated use `ResyncResponse$inboundSchema` instead. */
    export const inboundSchema = ResyncResponse$inboundSchema;
    /** @deprecated use `ResyncResponse$outboundSchema` instead. */
    export const outboundSchema = ResyncResponse$outboundSchema;
    /** @deprecated use `ResyncResponse$Outbound` instead. */
    export type Outbound = ResyncResponse$Outbound;
}
