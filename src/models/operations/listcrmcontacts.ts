/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCrmContactsRequest = {
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

export type ListCrmContactsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedCrmContactOutput>;
};

export type ListCrmContactsResponse = {
  result: ListCrmContactsResponseBody;
};

/** @internal */
export const ListCrmContactsRequest$inboundSchema: z.ZodType<
  ListCrmContactsRequest,
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
export type ListCrmContactsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListCrmContactsRequest$outboundSchema: z.ZodType<
  ListCrmContactsRequest$Outbound,
  z.ZodTypeDef,
  ListCrmContactsRequest
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
export namespace ListCrmContactsRequest$ {
  /** @deprecated use `ListCrmContactsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCrmContactsRequest$inboundSchema;
  /** @deprecated use `ListCrmContactsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCrmContactsRequest$outboundSchema;
  /** @deprecated use `ListCrmContactsRequest$Outbound` instead. */
  export type Outbound = ListCrmContactsRequest$Outbound;
}

export function listCrmContactsRequestToJSON(
  listCrmContactsRequest: ListCrmContactsRequest,
): string {
  return JSON.stringify(
    ListCrmContactsRequest$outboundSchema.parse(listCrmContactsRequest),
  );
}

export function listCrmContactsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmContactsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmContactsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmContactsRequest' from JSON`,
  );
}

/** @internal */
export const ListCrmContactsResponseBody$inboundSchema: z.ZodType<
  ListCrmContactsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedCrmContactOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListCrmContactsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedCrmContactOutput$Outbound>;
};

/** @internal */
export const ListCrmContactsResponseBody$outboundSchema: z.ZodType<
  ListCrmContactsResponseBody$Outbound,
  z.ZodTypeDef,
  ListCrmContactsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedCrmContactOutput$outboundSchema),
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
export namespace ListCrmContactsResponseBody$ {
  /** @deprecated use `ListCrmContactsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCrmContactsResponseBody$inboundSchema;
  /** @deprecated use `ListCrmContactsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCrmContactsResponseBody$outboundSchema;
  /** @deprecated use `ListCrmContactsResponseBody$Outbound` instead. */
  export type Outbound = ListCrmContactsResponseBody$Outbound;
}

export function listCrmContactsResponseBodyToJSON(
  listCrmContactsResponseBody: ListCrmContactsResponseBody,
): string {
  return JSON.stringify(
    ListCrmContactsResponseBody$outboundSchema.parse(
      listCrmContactsResponseBody,
    ),
  );
}

export function listCrmContactsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmContactsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmContactsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmContactsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListCrmContactsResponse$inboundSchema: z.ZodType<
  ListCrmContactsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListCrmContactsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCrmContactsResponse$Outbound = {
  Result: ListCrmContactsResponseBody$Outbound;
};

/** @internal */
export const ListCrmContactsResponse$outboundSchema: z.ZodType<
  ListCrmContactsResponse$Outbound,
  z.ZodTypeDef,
  ListCrmContactsResponse
> = z.object({
  result: z.lazy(() => ListCrmContactsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCrmContactsResponse$ {
  /** @deprecated use `ListCrmContactsResponse$inboundSchema` instead. */
  export const inboundSchema = ListCrmContactsResponse$inboundSchema;
  /** @deprecated use `ListCrmContactsResponse$outboundSchema` instead. */
  export const outboundSchema = ListCrmContactsResponse$outboundSchema;
  /** @deprecated use `ListCrmContactsResponse$Outbound` instead. */
  export type Outbound = ListCrmContactsResponse$Outbound;
}

export function listCrmContactsResponseToJSON(
  listCrmContactsResponse: ListCrmContactsResponse,
): string {
  return JSON.stringify(
    ListCrmContactsResponse$outboundSchema.parse(listCrmContactsResponse),
  );
}

export function listCrmContactsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmContactsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmContactsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmContactsResponse' from JSON`,
  );
}
