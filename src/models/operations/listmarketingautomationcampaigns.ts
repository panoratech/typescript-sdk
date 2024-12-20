/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListMarketingautomationCampaignsRequest = {
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

export type ListMarketingautomationCampaignsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedMarketingautomationCampaignOutput>;
};

export type ListMarketingautomationCampaignsResponse = {
  result: ListMarketingautomationCampaignsResponseBody;
};

/** @internal */
export const ListMarketingautomationCampaignsRequest$inboundSchema: z.ZodType<
  ListMarketingautomationCampaignsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  limit: z.number().optional(),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type ListMarketingautomationCampaignsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationCampaignsRequest$outboundSchema: z.ZodType<
  ListMarketingautomationCampaignsRequest$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationCampaignsRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  limit: z.number().optional(),
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
export namespace ListMarketingautomationCampaignsRequest$ {
  /** @deprecated use `ListMarketingautomationCampaignsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationCampaignsRequest$inboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationCampaignsRequest$outboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsRequest$Outbound` instead. */
  export type Outbound = ListMarketingautomationCampaignsRequest$Outbound;
}

export function listMarketingautomationCampaignsRequestToJSON(
  listMarketingautomationCampaignsRequest:
    ListMarketingautomationCampaignsRequest,
): string {
  return JSON.stringify(
    ListMarketingautomationCampaignsRequest$outboundSchema.parse(
      listMarketingautomationCampaignsRequest,
    ),
  );
}

export function listMarketingautomationCampaignsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListMarketingautomationCampaignsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationCampaignsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListMarketingautomationCampaignsRequest' from JSON`,
  );
}

/** @internal */
export const ListMarketingautomationCampaignsResponseBody$inboundSchema:
  z.ZodType<
    ListMarketingautomationCampaignsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    prev_cursor: z.nullable(z.string()),
    next_cursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationCampaignOutput$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "prev_cursor": "prevCursor",
      "next_cursor": "nextCursor",
    });
  });

/** @internal */
export type ListMarketingautomationCampaignsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedMarketingautomationCampaignOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationCampaignsResponseBody$outboundSchema:
  z.ZodType<
    ListMarketingautomationCampaignsResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationCampaignsResponseBody
  > = z.object({
    prevCursor: z.nullable(z.string()),
    nextCursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationCampaignOutput$outboundSchema,
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
export namespace ListMarketingautomationCampaignsResponseBody$ {
  /** @deprecated use `ListMarketingautomationCampaignsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationCampaignsResponseBody$inboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationCampaignsResponseBody$outboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsResponseBody$Outbound` instead. */
  export type Outbound = ListMarketingautomationCampaignsResponseBody$Outbound;
}

export function listMarketingautomationCampaignsResponseBodyToJSON(
  listMarketingautomationCampaignsResponseBody:
    ListMarketingautomationCampaignsResponseBody,
): string {
  return JSON.stringify(
    ListMarketingautomationCampaignsResponseBody$outboundSchema.parse(
      listMarketingautomationCampaignsResponseBody,
    ),
  );
}

export function listMarketingautomationCampaignsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ListMarketingautomationCampaignsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationCampaignsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListMarketingautomationCampaignsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListMarketingautomationCampaignsResponse$inboundSchema: z.ZodType<
  ListMarketingautomationCampaignsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ListMarketingautomationCampaignsResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListMarketingautomationCampaignsResponse$Outbound = {
  Result: ListMarketingautomationCampaignsResponseBody$Outbound;
};

/** @internal */
export const ListMarketingautomationCampaignsResponse$outboundSchema: z.ZodType<
  ListMarketingautomationCampaignsResponse$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationCampaignsResponse
> = z.object({
  result: z.lazy(() =>
    ListMarketingautomationCampaignsResponseBody$outboundSchema
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
export namespace ListMarketingautomationCampaignsResponse$ {
  /** @deprecated use `ListMarketingautomationCampaignsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationCampaignsResponse$inboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationCampaignsResponse$outboundSchema;
  /** @deprecated use `ListMarketingautomationCampaignsResponse$Outbound` instead. */
  export type Outbound = ListMarketingautomationCampaignsResponse$Outbound;
}

export function listMarketingautomationCampaignsResponseToJSON(
  listMarketingautomationCampaignsResponse:
    ListMarketingautomationCampaignsResponse,
): string {
  return JSON.stringify(
    ListMarketingautomationCampaignsResponse$outboundSchema.parse(
      listMarketingautomationCampaignsResponse,
    ),
  );
}

export function listMarketingautomationCampaignsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListMarketingautomationCampaignsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationCampaignsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListMarketingautomationCampaignsResponse' from JSON`,
  );
}
