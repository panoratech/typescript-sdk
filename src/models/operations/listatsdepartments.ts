/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListAtsDepartmentsRequest = {
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

export type ListAtsDepartmentsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAtsDepartmentOutput>;
};

export type ListAtsDepartmentsResponse = {
  result: ListAtsDepartmentsResponseBody;
};

/** @internal */
export const ListAtsDepartmentsRequest$inboundSchema: z.ZodType<
  ListAtsDepartmentsRequest,
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
export type ListAtsDepartmentsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListAtsDepartmentsRequest$outboundSchema: z.ZodType<
  ListAtsDepartmentsRequest$Outbound,
  z.ZodTypeDef,
  ListAtsDepartmentsRequest
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
export namespace ListAtsDepartmentsRequest$ {
  /** @deprecated use `ListAtsDepartmentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAtsDepartmentsRequest$inboundSchema;
  /** @deprecated use `ListAtsDepartmentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAtsDepartmentsRequest$outboundSchema;
  /** @deprecated use `ListAtsDepartmentsRequest$Outbound` instead. */
  export type Outbound = ListAtsDepartmentsRequest$Outbound;
}

/** @internal */
export const ListAtsDepartmentsResponseBody$inboundSchema: z.ZodType<
  ListAtsDepartmentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAtsDepartmentOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAtsDepartmentsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAtsDepartmentOutput$Outbound>;
};

/** @internal */
export const ListAtsDepartmentsResponseBody$outboundSchema: z.ZodType<
  ListAtsDepartmentsResponseBody$Outbound,
  z.ZodTypeDef,
  ListAtsDepartmentsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAtsDepartmentOutput$outboundSchema),
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
export namespace ListAtsDepartmentsResponseBody$ {
  /** @deprecated use `ListAtsDepartmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAtsDepartmentsResponseBody$inboundSchema;
  /** @deprecated use `ListAtsDepartmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListAtsDepartmentsResponseBody$outboundSchema;
  /** @deprecated use `ListAtsDepartmentsResponseBody$Outbound` instead. */
  export type Outbound = ListAtsDepartmentsResponseBody$Outbound;
}

/** @internal */
export const ListAtsDepartmentsResponse$inboundSchema: z.ZodType<
  ListAtsDepartmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAtsDepartmentsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAtsDepartmentsResponse$Outbound = {
  Result: ListAtsDepartmentsResponseBody$Outbound;
};

/** @internal */
export const ListAtsDepartmentsResponse$outboundSchema: z.ZodType<
  ListAtsDepartmentsResponse$Outbound,
  z.ZodTypeDef,
  ListAtsDepartmentsResponse
> = z.object({
  result: z.lazy(() => ListAtsDepartmentsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsDepartmentsResponse$ {
  /** @deprecated use `ListAtsDepartmentsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAtsDepartmentsResponse$inboundSchema;
  /** @deprecated use `ListAtsDepartmentsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAtsDepartmentsResponse$outboundSchema;
  /** @deprecated use `ListAtsDepartmentsResponse$Outbound` instead. */
  export type Outbound = ListAtsDepartmentsResponse$Outbound;
}
