/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RetrieveTicketingAccountRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the account you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingAccountRequest$inboundSchema: z.ZodType<
    RetrieveTicketingAccountRequest,
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
export type RetrieveTicketingAccountRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveTicketingAccountRequest$outboundSchema: z.ZodType<
    RetrieveTicketingAccountRequest$Outbound,
    z.ZodTypeDef,
    RetrieveTicketingAccountRequest
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
export namespace RetrieveTicketingAccountRequest$ {
    /** @deprecated use `RetrieveTicketingAccountRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveTicketingAccountRequest$inboundSchema;
    /** @deprecated use `RetrieveTicketingAccountRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveTicketingAccountRequest$outboundSchema;
    /** @deprecated use `RetrieveTicketingAccountRequest$Outbound` instead. */
    export type Outbound = RetrieveTicketingAccountRequest$Outbound;
}
