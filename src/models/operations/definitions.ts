/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type DefinitionsResponse = {
    httpMeta: components.HTTPMetadata;
    customFieldResponse?: components.CustomFieldResponse | undefined;
};

/** @internal */
export const DefinitionsResponse$inboundSchema: z.ZodType<
    DefinitionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        CustomFieldResponse: components.CustomFieldResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            CustomFieldResponse: "customFieldResponse",
        });
    });

/** @internal */
export type DefinitionsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CustomFieldResponse?: components.CustomFieldResponse$Outbound | undefined;
};

/** @internal */
export const DefinitionsResponse$outboundSchema: z.ZodType<
    DefinitionsResponse$Outbound,
    z.ZodTypeDef,
    DefinitionsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        customFieldResponse: components.CustomFieldResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            customFieldResponse: "CustomFieldResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefinitionsResponse$ {
    /** @deprecated use `DefinitionsResponse$inboundSchema` instead. */
    export const inboundSchema = DefinitionsResponse$inboundSchema;
    /** @deprecated use `DefinitionsResponse$outboundSchema` instead. */
    export const outboundSchema = DefinitionsResponse$outboundSchema;
    /** @deprecated use `DefinitionsResponse$Outbound` instead. */
    export type Outbound = DefinitionsResponse$Outbound;
}
