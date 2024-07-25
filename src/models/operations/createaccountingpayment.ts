/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAccountingPaymentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedAccountingPaymentInput: components.UnifiedAccountingPaymentInput;
};

export type CreateAccountingPaymentResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingPaymentOutput?: components.UnifiedAccountingPaymentOutput | undefined;
};

/** @internal */
export const CreateAccountingPaymentRequest$inboundSchema: z.ZodType<
    CreateAccountingPaymentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAccountingPaymentInput: components.UnifiedAccountingPaymentInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAccountingPaymentInput: "unifiedAccountingPaymentInput",
        });
    });

/** @internal */
export type CreateAccountingPaymentRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAccountingPaymentInput: components.UnifiedAccountingPaymentInput$Outbound;
};

/** @internal */
export const CreateAccountingPaymentRequest$outboundSchema: z.ZodType<
    CreateAccountingPaymentRequest$Outbound,
    z.ZodTypeDef,
    CreateAccountingPaymentRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAccountingPaymentInput: components.UnifiedAccountingPaymentInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAccountingPaymentInput: "UnifiedAccountingPaymentInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingPaymentRequest$ {
    /** @deprecated use `CreateAccountingPaymentRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingPaymentRequest$inboundSchema;
    /** @deprecated use `CreateAccountingPaymentRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingPaymentRequest$outboundSchema;
    /** @deprecated use `CreateAccountingPaymentRequest$Outbound` instead. */
    export type Outbound = CreateAccountingPaymentRequest$Outbound;
}

/** @internal */
export const CreateAccountingPaymentResponse$inboundSchema: z.ZodType<
    CreateAccountingPaymentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingPaymentOutput:
            components.UnifiedAccountingPaymentOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingPaymentOutput: "unifiedAccountingPaymentOutput",
        });
    });

/** @internal */
export type CreateAccountingPaymentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingPaymentOutput?: components.UnifiedAccountingPaymentOutput$Outbound | undefined;
};

/** @internal */
export const CreateAccountingPaymentResponse$outboundSchema: z.ZodType<
    CreateAccountingPaymentResponse$Outbound,
    z.ZodTypeDef,
    CreateAccountingPaymentResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingPaymentOutput:
            components.UnifiedAccountingPaymentOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingPaymentOutput: "UnifiedAccountingPaymentOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingPaymentResponse$ {
    /** @deprecated use `CreateAccountingPaymentResponse$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingPaymentResponse$inboundSchema;
    /** @deprecated use `CreateAccountingPaymentResponse$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingPaymentResponse$outboundSchema;
    /** @deprecated use `CreateAccountingPaymentResponse$Outbound` instead. */
    export type Outbound = CreateAccountingPaymentResponse$Outbound;
}
