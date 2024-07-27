/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type EventPayload = {};

/** @internal */
export const EventPayload$inboundSchema: z.ZodType<EventPayload, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type EventPayload$Outbound = {};

/** @internal */
export const EventPayload$outboundSchema: z.ZodType<
    EventPayload$Outbound,
    z.ZodTypeDef,
    EventPayload
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventPayload$ {
    /** @deprecated use `EventPayload$inboundSchema` instead. */
    export const inboundSchema = EventPayload$inboundSchema;
    /** @deprecated use `EventPayload$outboundSchema` instead. */
    export const outboundSchema = EventPayload$outboundSchema;
    /** @deprecated use `EventPayload$Outbound` instead. */
    export type Outbound = EventPayload$Outbound;
}
