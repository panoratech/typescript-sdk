/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListAtsJobRequest = {
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

export type ListAtsJobResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAtsJobOutput>;
};

export type ListAtsJobResponse = {
  result: ListAtsJobResponseBody;
};

/** @internal */
export const ListAtsJobRequest$inboundSchema: z.ZodType<
  ListAtsJobRequest,
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
export type ListAtsJobRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListAtsJobRequest$outboundSchema: z.ZodType<
  ListAtsJobRequest$Outbound,
  z.ZodTypeDef,
  ListAtsJobRequest
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
export namespace ListAtsJobRequest$ {
  /** @deprecated use `ListAtsJobRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsJobRequest$inboundSchema;
  /** @deprecated use `ListAtsJobRequest$outboundSchema` instead. */
  export const outboundSchema = ListAtsJobRequest$outboundSchema;
  /** @deprecated use `ListAtsJobRequest$Outbound` instead. */
  export type Outbound = ListAtsJobRequest$Outbound;
}

/** @internal */
export const ListAtsJobResponseBody$inboundSchema: z.ZodType<
  ListAtsJobResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAtsJobOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAtsJobResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAtsJobOutput$Outbound>;
};

/** @internal */
export const ListAtsJobResponseBody$outboundSchema: z.ZodType<
  ListAtsJobResponseBody$Outbound,
  z.ZodTypeDef,
  ListAtsJobResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAtsJobOutput$outboundSchema),
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
export namespace ListAtsJobResponseBody$ {
  /** @deprecated use `ListAtsJobResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAtsJobResponseBody$inboundSchema;
  /** @deprecated use `ListAtsJobResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListAtsJobResponseBody$outboundSchema;
  /** @deprecated use `ListAtsJobResponseBody$Outbound` instead. */
  export type Outbound = ListAtsJobResponseBody$Outbound;
}

/** @internal */
export const ListAtsJobResponse$inboundSchema: z.ZodType<
  ListAtsJobResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAtsJobResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAtsJobResponse$Outbound = {
  Result: ListAtsJobResponseBody$Outbound;
};

/** @internal */
export const ListAtsJobResponse$outboundSchema: z.ZodType<
  ListAtsJobResponse$Outbound,
  z.ZodTypeDef,
  ListAtsJobResponse
> = z.object({
  result: z.lazy(() => ListAtsJobResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsJobResponse$ {
  /** @deprecated use `ListAtsJobResponse$inboundSchema` instead. */
  export const inboundSchema = ListAtsJobResponse$inboundSchema;
  /** @deprecated use `ListAtsJobResponse$outboundSchema` instead. */
  export const outboundSchema = ListAtsJobResponse$outboundSchema;
  /** @deprecated use `ListAtsJobResponse$Outbound` instead. */
  export type Outbound = ListAtsJobResponse$Outbound;
}
