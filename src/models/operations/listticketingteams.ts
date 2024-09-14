/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListTicketingTeamsRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original software.
   */
  remoteData?: boolean | undefined;
  /**
   * Set to get the number of records.
   */
  limit?: number | undefined;
  /**
   * Set to get the number of records after this cursor.
   */
  cursor?: string | undefined;
};

export type ListTicketingTeamsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedTicketingTeamOutput>;
};

export type ListTicketingTeamsResponse = {
  result: ListTicketingTeamsResponseBody;
};

/** @internal */
export const ListTicketingTeamsRequest$inboundSchema: z.ZodType<
  ListTicketingTeamsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  limit: z.number().default(50),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type ListTicketingTeamsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListTicketingTeamsRequest$outboundSchema: z.ZodType<
  ListTicketingTeamsRequest$Outbound,
  z.ZodTypeDef,
  ListTicketingTeamsRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  limit: z.number().default(50),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingTeamsRequest$ {
  /** @deprecated use `ListTicketingTeamsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTeamsRequest$inboundSchema;
  /** @deprecated use `ListTicketingTeamsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTeamsRequest$outboundSchema;
  /** @deprecated use `ListTicketingTeamsRequest$Outbound` instead. */
  export type Outbound = ListTicketingTeamsRequest$Outbound;
}

/** @internal */
export const ListTicketingTeamsResponseBody$inboundSchema: z.ZodType<
  ListTicketingTeamsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingTeamOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListTicketingTeamsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedTicketingTeamOutput$Outbound>;
};

/** @internal */
export const ListTicketingTeamsResponseBody$outboundSchema: z.ZodType<
  ListTicketingTeamsResponseBody$Outbound,
  z.ZodTypeDef,
  ListTicketingTeamsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingTeamOutput$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    prevCursor: "prev_cursor",
    nextCursor: "next_cursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingTeamsResponseBody$ {
  /** @deprecated use `ListTicketingTeamsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTeamsResponseBody$inboundSchema;
  /** @deprecated use `ListTicketingTeamsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTeamsResponseBody$outboundSchema;
  /** @deprecated use `ListTicketingTeamsResponseBody$Outbound` instead. */
  export type Outbound = ListTicketingTeamsResponseBody$Outbound;
}

/** @internal */
export const ListTicketingTeamsResponse$inboundSchema: z.ZodType<
  ListTicketingTeamsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListTicketingTeamsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListTicketingTeamsResponse$Outbound = {
  Result: ListTicketingTeamsResponseBody$Outbound;
};

/** @internal */
export const ListTicketingTeamsResponse$outboundSchema: z.ZodType<
  ListTicketingTeamsResponse$Outbound,
  z.ZodTypeDef,
  ListTicketingTeamsResponse
> = z.object({
  result: z.lazy(() => ListTicketingTeamsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingTeamsResponse$ {
  /** @deprecated use `ListTicketingTeamsResponse$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTeamsResponse$inboundSchema;
  /** @deprecated use `ListTicketingTeamsResponse$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTeamsResponse$outboundSchema;
  /** @deprecated use `ListTicketingTeamsResponse$Outbound` instead. */
  export type Outbound = ListTicketingTeamsResponse$Outbound;
}
