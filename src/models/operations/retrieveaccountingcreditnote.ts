/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveAccountingCreditNoteRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the creditnote you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCreditNoteRequest$inboundSchema: z.ZodType<
    RetrieveAccountingCreditNoteRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveAccountingCreditNoteRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAccountingCreditNoteRequest$outboundSchema: z.ZodType<
    RetrieveAccountingCreditNoteRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAccountingCreditNoteRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAccountingCreditNoteRequest$ {
    /** @deprecated use `RetrieveAccountingCreditNoteRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAccountingCreditNoteRequest$inboundSchema;
    /** @deprecated use `RetrieveAccountingCreditNoteRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAccountingCreditNoteRequest$outboundSchema;
    /** @deprecated use `RetrieveAccountingCreditNoteRequest$Outbound` instead. */
    export type Outbound = RetrieveAccountingCreditNoteRequest$Outbound;
}
