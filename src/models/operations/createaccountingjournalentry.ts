/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAccountingJournalEntryRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedAccountingJournalentryInput: components.UnifiedAccountingJournalentryInput;
};

export type CreateAccountingJournalEntryResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingJournalentryOutput?:
        | components.UnifiedAccountingJournalentryOutput
        | undefined;
};

/** @internal */
export const CreateAccountingJournalEntryRequest$inboundSchema: z.ZodType<
    CreateAccountingJournalEntryRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAccountingJournalentryInput:
            components.UnifiedAccountingJournalentryInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAccountingJournalentryInput: "unifiedAccountingJournalentryInput",
        });
    });

/** @internal */
export type CreateAccountingJournalEntryRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAccountingJournalentryInput: components.UnifiedAccountingJournalentryInput$Outbound;
};

/** @internal */
export const CreateAccountingJournalEntryRequest$outboundSchema: z.ZodType<
    CreateAccountingJournalEntryRequest$Outbound,
    z.ZodTypeDef,
    CreateAccountingJournalEntryRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAccountingJournalentryInput:
            components.UnifiedAccountingJournalentryInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAccountingJournalentryInput: "UnifiedAccountingJournalentryInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingJournalEntryRequest$ {
    /** @deprecated use `CreateAccountingJournalEntryRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingJournalEntryRequest$inboundSchema;
    /** @deprecated use `CreateAccountingJournalEntryRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingJournalEntryRequest$outboundSchema;
    /** @deprecated use `CreateAccountingJournalEntryRequest$Outbound` instead. */
    export type Outbound = CreateAccountingJournalEntryRequest$Outbound;
}

/** @internal */
export const CreateAccountingJournalEntryResponse$inboundSchema: z.ZodType<
    CreateAccountingJournalEntryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingJournalentryOutput:
            components.UnifiedAccountingJournalentryOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingJournalentryOutput: "unifiedAccountingJournalentryOutput",
        });
    });

/** @internal */
export type CreateAccountingJournalEntryResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingJournalentryOutput?:
        | components.UnifiedAccountingJournalentryOutput$Outbound
        | undefined;
};

/** @internal */
export const CreateAccountingJournalEntryResponse$outboundSchema: z.ZodType<
    CreateAccountingJournalEntryResponse$Outbound,
    z.ZodTypeDef,
    CreateAccountingJournalEntryResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingJournalentryOutput:
            components.UnifiedAccountingJournalentryOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingJournalentryOutput: "UnifiedAccountingJournalentryOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingJournalEntryResponse$ {
    /** @deprecated use `CreateAccountingJournalEntryResponse$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingJournalEntryResponse$inboundSchema;
    /** @deprecated use `CreateAccountingJournalEntryResponse$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingJournalEntryResponse$outboundSchema;
    /** @deprecated use `CreateAccountingJournalEntryResponse$Outbound` instead. */
    export type Outbound = CreateAccountingJournalEntryResponse$Outbound;
}
