/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type DeleteWebhookRequest = {
    id: string;
};

export type DeleteWebhookResponse = {
    httpMeta: components.HTTPMetadata;
    webhookResponse?: components.WebhookResponse | undefined;
};

/** @internal */
export namespace DeleteWebhookRequest$ {
    export const inboundSchema: z.ZodType<DeleteWebhookRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWebhookRequest> = z.object(
        {
            id: z.string(),
        }
    );
}

/** @internal */
export namespace DeleteWebhookResponse$ {
    export const inboundSchema: z.ZodType<DeleteWebhookResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            WebhookResponse: components.WebhookResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                WebhookResponse: "webhookResponse",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        WebhookResponse?: components.WebhookResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWebhookResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            webhookResponse: components.WebhookResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                webhookResponse: "WebhookResponse",
            });
        });
}
