/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListHrisTimeoffbalancesRequest = {
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

export type ListHrisTimeoffbalancesResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedHrisTimeoffbalanceOutput>;
};

export type ListHrisTimeoffbalancesResponse = {
  result: ListHrisTimeoffbalancesResponseBody;
};

/** @internal */
export const ListHrisTimeoffbalancesRequest$inboundSchema: z.ZodType<
  ListHrisTimeoffbalancesRequest,
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
export type ListHrisTimeoffbalancesRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListHrisTimeoffbalancesRequest$outboundSchema: z.ZodType<
  ListHrisTimeoffbalancesRequest$Outbound,
  z.ZodTypeDef,
  ListHrisTimeoffbalancesRequest
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
export namespace ListHrisTimeoffbalancesRequest$ {
  /** @deprecated use `ListHrisTimeoffbalancesRequest$inboundSchema` instead. */
  export const inboundSchema = ListHrisTimeoffbalancesRequest$inboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesRequest$outboundSchema` instead. */
  export const outboundSchema = ListHrisTimeoffbalancesRequest$outboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesRequest$Outbound` instead. */
  export type Outbound = ListHrisTimeoffbalancesRequest$Outbound;
}

/** @internal */
export const ListHrisTimeoffbalancesResponseBody$inboundSchema: z.ZodType<
  ListHrisTimeoffbalancesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedHrisTimeoffbalanceOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListHrisTimeoffbalancesResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedHrisTimeoffbalanceOutput$Outbound>;
};

/** @internal */
export const ListHrisTimeoffbalancesResponseBody$outboundSchema: z.ZodType<
  ListHrisTimeoffbalancesResponseBody$Outbound,
  z.ZodTypeDef,
  ListHrisTimeoffbalancesResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedHrisTimeoffbalanceOutput$outboundSchema),
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
export namespace ListHrisTimeoffbalancesResponseBody$ {
  /** @deprecated use `ListHrisTimeoffbalancesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListHrisTimeoffbalancesResponseBody$inboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListHrisTimeoffbalancesResponseBody$outboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesResponseBody$Outbound` instead. */
  export type Outbound = ListHrisTimeoffbalancesResponseBody$Outbound;
}

/** @internal */
export const ListHrisTimeoffbalancesResponse$inboundSchema: z.ZodType<
  ListHrisTimeoffbalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListHrisTimeoffbalancesResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListHrisTimeoffbalancesResponse$Outbound = {
  Result: ListHrisTimeoffbalancesResponseBody$Outbound;
};

/** @internal */
export const ListHrisTimeoffbalancesResponse$outboundSchema: z.ZodType<
  ListHrisTimeoffbalancesResponse$Outbound,
  z.ZodTypeDef,
  ListHrisTimeoffbalancesResponse
> = z.object({
  result: z.lazy(() => ListHrisTimeoffbalancesResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisTimeoffbalancesResponse$ {
  /** @deprecated use `ListHrisTimeoffbalancesResponse$inboundSchema` instead. */
  export const inboundSchema = ListHrisTimeoffbalancesResponse$inboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesResponse$outboundSchema` instead. */
  export const outboundSchema = ListHrisTimeoffbalancesResponse$outboundSchema;
  /** @deprecated use `ListHrisTimeoffbalancesResponse$Outbound` instead. */
  export type Outbound = ListHrisTimeoffbalancesResponse$Outbound;
}
