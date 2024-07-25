/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateStatusRequest = {
    id: string;
};

export type UpdateStatusResponse = {
    httpMeta: components.HTTPMetadata;
    webhookResponse?: components.WebhookResponse | undefined;
};

/** @internal */
export const UpdateStatusRequest$inboundSchema: z.ZodType<
    UpdateStatusRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type UpdateStatusRequest$Outbound = {
    id: string;
};

/** @internal */
export const UpdateStatusRequest$outboundSchema: z.ZodType<
    UpdateStatusRequest$Outbound,
    z.ZodTypeDef,
    UpdateStatusRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStatusRequest$ {
    /** @deprecated use `UpdateStatusRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateStatusRequest$inboundSchema;
    /** @deprecated use `UpdateStatusRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateStatusRequest$outboundSchema;
    /** @deprecated use `UpdateStatusRequest$Outbound` instead. */
    export type Outbound = UpdateStatusRequest$Outbound;
}

/** @internal */
export const UpdateStatusResponse$inboundSchema: z.ZodType<
    UpdateStatusResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        WebhookResponse: components.WebhookResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            WebhookResponse: "webhookResponse",
        });
    });

/** @internal */
export type UpdateStatusResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WebhookResponse?: components.WebhookResponse$Outbound | undefined;
};

/** @internal */
export const UpdateStatusResponse$outboundSchema: z.ZodType<
    UpdateStatusResponse$Outbound,
    z.ZodTypeDef,
    UpdateStatusResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        webhookResponse: components.WebhookResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            webhookResponse: "WebhookResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStatusResponse$ {
    /** @deprecated use `UpdateStatusResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateStatusResponse$inboundSchema;
    /** @deprecated use `UpdateStatusResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateStatusResponse$outboundSchema;
    /** @deprecated use `UpdateStatusResponse$Outbound` instead. */
    export type Outbound = UpdateStatusResponse$Outbound;
}