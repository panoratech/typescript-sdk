/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListLinkedUsersResponse = {
    httpMeta: components.HTTPMetadata;
    linkedUserResponses?: Array<components.LinkedUserResponse> | undefined;
};

/** @internal */
export const ListLinkedUsersResponse$inboundSchema: z.ZodType<
    ListLinkedUsersResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        LinkedUserResponses: z.array(components.LinkedUserResponse$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            LinkedUserResponses: "linkedUserResponses",
        });
    });

/** @internal */
export type ListLinkedUsersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LinkedUserResponses?: Array<components.LinkedUserResponse$Outbound> | undefined;
};

/** @internal */
export const ListLinkedUsersResponse$outboundSchema: z.ZodType<
    ListLinkedUsersResponse$Outbound,
    z.ZodTypeDef,
    ListLinkedUsersResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        linkedUserResponses: z.array(components.LinkedUserResponse$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            linkedUserResponses: "LinkedUserResponses",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLinkedUsersResponse$ {
    /** @deprecated use `ListLinkedUsersResponse$inboundSchema` instead. */
    export const inboundSchema = ListLinkedUsersResponse$inboundSchema;
    /** @deprecated use `ListLinkedUsersResponse$outboundSchema` instead. */
    export const outboundSchema = ListLinkedUsersResponse$outboundSchema;
    /** @deprecated use `ListLinkedUsersResponse$Outbound` instead. */
    export type Outbound = ListLinkedUsersResponse$Outbound;
}
