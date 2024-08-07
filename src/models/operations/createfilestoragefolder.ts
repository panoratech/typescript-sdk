/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateFilestorageFolderRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedFilestorageFolderInput: components.UnifiedFilestorageFolderInput;
};

/** @internal */
export const CreateFilestorageFolderRequest$inboundSchema: z.ZodType<
    CreateFilestorageFolderRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedFilestorageFolderInput: components.UnifiedFilestorageFolderInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedFilestorageFolderInput: "unifiedFilestorageFolderInput",
        });
    });

/** @internal */
export type CreateFilestorageFolderRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedFilestorageFolderInput: components.UnifiedFilestorageFolderInput$Outbound;
};

/** @internal */
export const CreateFilestorageFolderRequest$outboundSchema: z.ZodType<
    CreateFilestorageFolderRequest$Outbound,
    z.ZodTypeDef,
    CreateFilestorageFolderRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedFilestorageFolderInput: components.UnifiedFilestorageFolderInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedFilestorageFolderInput: "UnifiedFilestorageFolderInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFilestorageFolderRequest$ {
    /** @deprecated use `CreateFilestorageFolderRequest$inboundSchema` instead. */
    export const inboundSchema = CreateFilestorageFolderRequest$inboundSchema;
    /** @deprecated use `CreateFilestorageFolderRequest$outboundSchema` instead. */
    export const outboundSchema = CreateFilestorageFolderRequest$outboundSchema;
    /** @deprecated use `CreateFilestorageFolderRequest$Outbound` instead. */
    export type Outbound = CreateFilestorageFolderRequest$Outbound;
}
