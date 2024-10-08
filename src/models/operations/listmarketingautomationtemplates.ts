/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListMarketingautomationTemplatesRequest = {
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

export type ListMarketingautomationTemplatesResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedMarketingautomationTemplateOutput>;
};

export type ListMarketingautomationTemplatesResponse = {
  result: ListMarketingautomationTemplatesResponseBody;
};

/** @internal */
export const ListMarketingautomationTemplatesRequest$inboundSchema: z.ZodType<
  ListMarketingautomationTemplatesRequest,
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
export type ListMarketingautomationTemplatesRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationTemplatesRequest$outboundSchema: z.ZodType<
  ListMarketingautomationTemplatesRequest$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationTemplatesRequest
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
export namespace ListMarketingautomationTemplatesRequest$ {
  /** @deprecated use `ListMarketingautomationTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationTemplatesRequest$inboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationTemplatesRequest$outboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesRequest$Outbound` instead. */
  export type Outbound = ListMarketingautomationTemplatesRequest$Outbound;
}

/** @internal */
export const ListMarketingautomationTemplatesResponseBody$inboundSchema:
  z.ZodType<
    ListMarketingautomationTemplatesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    prev_cursor: z.nullable(z.string()),
    next_cursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationTemplateOutput$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "prev_cursor": "prevCursor",
      "next_cursor": "nextCursor",
    });
  });

/** @internal */
export type ListMarketingautomationTemplatesResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedMarketingautomationTemplateOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationTemplatesResponseBody$outboundSchema:
  z.ZodType<
    ListMarketingautomationTemplatesResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationTemplatesResponseBody
  > = z.object({
    prevCursor: z.nullable(z.string()),
    nextCursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationTemplateOutput$outboundSchema,
    ),
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
export namespace ListMarketingautomationTemplatesResponseBody$ {
  /** @deprecated use `ListMarketingautomationTemplatesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationTemplatesResponseBody$inboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationTemplatesResponseBody$outboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesResponseBody$Outbound` instead. */
  export type Outbound = ListMarketingautomationTemplatesResponseBody$Outbound;
}

/** @internal */
export const ListMarketingautomationTemplatesResponse$inboundSchema: z.ZodType<
  ListMarketingautomationTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ListMarketingautomationTemplatesResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListMarketingautomationTemplatesResponse$Outbound = {
  Result: ListMarketingautomationTemplatesResponseBody$Outbound;
};

/** @internal */
export const ListMarketingautomationTemplatesResponse$outboundSchema: z.ZodType<
  ListMarketingautomationTemplatesResponse$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationTemplatesResponse
> = z.object({
  result: z.lazy(() =>
    ListMarketingautomationTemplatesResponseBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMarketingautomationTemplatesResponse$ {
  /** @deprecated use `ListMarketingautomationTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationTemplatesResponse$inboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationTemplatesResponse$outboundSchema;
  /** @deprecated use `ListMarketingautomationTemplatesResponse$Outbound` instead. */
  export type Outbound = ListMarketingautomationTemplatesResponse$Outbound;
}
