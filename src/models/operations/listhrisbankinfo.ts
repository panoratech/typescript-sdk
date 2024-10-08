/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListHrisBankInfoRequest = {
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

export type ListHrisBankInfoResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedHrisBankinfoOutput>;
};

export type ListHrisBankInfoResponse = {
  result: ListHrisBankInfoResponseBody;
};

/** @internal */
export const ListHrisBankInfoRequest$inboundSchema: z.ZodType<
  ListHrisBankInfoRequest,
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
export type ListHrisBankInfoRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListHrisBankInfoRequest$outboundSchema: z.ZodType<
  ListHrisBankInfoRequest$Outbound,
  z.ZodTypeDef,
  ListHrisBankInfoRequest
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
export namespace ListHrisBankInfoRequest$ {
  /** @deprecated use `ListHrisBankInfoRequest$inboundSchema` instead. */
  export const inboundSchema = ListHrisBankInfoRequest$inboundSchema;
  /** @deprecated use `ListHrisBankInfoRequest$outboundSchema` instead. */
  export const outboundSchema = ListHrisBankInfoRequest$outboundSchema;
  /** @deprecated use `ListHrisBankInfoRequest$Outbound` instead. */
  export type Outbound = ListHrisBankInfoRequest$Outbound;
}

/** @internal */
export const ListHrisBankInfoResponseBody$inboundSchema: z.ZodType<
  ListHrisBankInfoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedHrisBankinfoOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListHrisBankInfoResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedHrisBankinfoOutput$Outbound>;
};

/** @internal */
export const ListHrisBankInfoResponseBody$outboundSchema: z.ZodType<
  ListHrisBankInfoResponseBody$Outbound,
  z.ZodTypeDef,
  ListHrisBankInfoResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedHrisBankinfoOutput$outboundSchema),
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
export namespace ListHrisBankInfoResponseBody$ {
  /** @deprecated use `ListHrisBankInfoResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListHrisBankInfoResponseBody$inboundSchema;
  /** @deprecated use `ListHrisBankInfoResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListHrisBankInfoResponseBody$outboundSchema;
  /** @deprecated use `ListHrisBankInfoResponseBody$Outbound` instead. */
  export type Outbound = ListHrisBankInfoResponseBody$Outbound;
}

/** @internal */
export const ListHrisBankInfoResponse$inboundSchema: z.ZodType<
  ListHrisBankInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListHrisBankInfoResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListHrisBankInfoResponse$Outbound = {
  Result: ListHrisBankInfoResponseBody$Outbound;
};

/** @internal */
export const ListHrisBankInfoResponse$outboundSchema: z.ZodType<
  ListHrisBankInfoResponse$Outbound,
  z.ZodTypeDef,
  ListHrisBankInfoResponse
> = z.object({
  result: z.lazy(() => ListHrisBankInfoResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHrisBankInfoResponse$ {
  /** @deprecated use `ListHrisBankInfoResponse$inboundSchema` instead. */
  export const inboundSchema = ListHrisBankInfoResponse$inboundSchema;
  /** @deprecated use `ListHrisBankInfoResponse$outboundSchema` instead. */
  export const outboundSchema = ListHrisBankInfoResponse$outboundSchema;
  /** @deprecated use `ListHrisBankInfoResponse$Outbound` instead. */
  export type Outbound = ListHrisBankInfoResponse$Outbound;
}
