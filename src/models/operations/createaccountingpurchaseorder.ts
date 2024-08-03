/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAccountingPurchaseOrderRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedAccountingPurchaseorderInput: components.UnifiedAccountingPurchaseorderInput;
};

/** @internal */
export const CreateAccountingPurchaseOrderRequest$inboundSchema: z.ZodType<
    CreateAccountingPurchaseOrderRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAccountingPurchaseorderInput:
            components.UnifiedAccountingPurchaseorderInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAccountingPurchaseorderInput: "unifiedAccountingPurchaseorderInput",
        });
    });

/** @internal */
export type CreateAccountingPurchaseOrderRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAccountingPurchaseorderInput: components.UnifiedAccountingPurchaseorderInput$Outbound;
};

/** @internal */
export const CreateAccountingPurchaseOrderRequest$outboundSchema: z.ZodType<
    CreateAccountingPurchaseOrderRequest$Outbound,
    z.ZodTypeDef,
    CreateAccountingPurchaseOrderRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAccountingPurchaseorderInput:
            components.UnifiedAccountingPurchaseorderInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAccountingPurchaseorderInput: "UnifiedAccountingPurchaseorderInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingPurchaseOrderRequest$ {
    /** @deprecated use `CreateAccountingPurchaseOrderRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingPurchaseOrderRequest$inboundSchema;
    /** @deprecated use `CreateAccountingPurchaseOrderRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingPurchaseOrderRequest$outboundSchema;
    /** @deprecated use `CreateAccountingPurchaseOrderRequest$Outbound` instead. */
    export type Outbound = CreateAccountingPurchaseOrderRequest$Outbound;
}
