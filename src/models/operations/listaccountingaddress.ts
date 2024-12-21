/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingAddressRequest = {
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

export type ListAccountingAddressResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingAddressOutput>;
};

export type ListAccountingAddressResponse = {
  result: ListAccountingAddressResponseBody;
};

/** @internal */
export const ListAccountingAddressRequest$inboundSchema: z.ZodType<
  ListAccountingAddressRequest,
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
export type ListAccountingAddressRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingAddressRequest$outboundSchema: z.ZodType<
  ListAccountingAddressRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingAddressRequest
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
export namespace ListAccountingAddressRequest$ {
  /** @deprecated use `ListAccountingAddressRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingAddressRequest$inboundSchema;
  /** @deprecated use `ListAccountingAddressRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountingAddressRequest$outboundSchema;
  /** @deprecated use `ListAccountingAddressRequest$Outbound` instead. */
  export type Outbound = ListAccountingAddressRequest$Outbound;
}

export function listAccountingAddressRequestToJSON(
  listAccountingAddressRequest: ListAccountingAddressRequest,
): string {
  return JSON.stringify(
    ListAccountingAddressRequest$outboundSchema.parse(
      listAccountingAddressRequest,
    ),
  );
}

export function listAccountingAddressRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAddressRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingAddressRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAddressRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingAddressResponseBody$inboundSchema: z.ZodType<
  ListAccountingAddressResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingAddressOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAccountingAddressResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingAddressOutput$Outbound>;
};

/** @internal */
export const ListAccountingAddressResponseBody$outboundSchema: z.ZodType<
  ListAccountingAddressResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccountingAddressResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingAddressOutput$outboundSchema),
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
export namespace ListAccountingAddressResponseBody$ {
  /** @deprecated use `ListAccountingAddressResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAccountingAddressResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingAddressResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingAddressResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingAddressResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingAddressResponseBody$Outbound;
}

export function listAccountingAddressResponseBodyToJSON(
  listAccountingAddressResponseBody: ListAccountingAddressResponseBody,
): string {
  return JSON.stringify(
    ListAccountingAddressResponseBody$outboundSchema.parse(
      listAccountingAddressResponseBody,
    ),
  );
}

export function listAccountingAddressResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAddressResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingAddressResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAddressResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingAddressResponse$inboundSchema: z.ZodType<
  ListAccountingAddressResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAccountingAddressResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingAddressResponse$Outbound = {
  Result: ListAccountingAddressResponseBody$Outbound;
};

/** @internal */
export const ListAccountingAddressResponse$outboundSchema: z.ZodType<
  ListAccountingAddressResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingAddressResponse
> = z.object({
  result: z.lazy(() => ListAccountingAddressResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingAddressResponse$ {
  /** @deprecated use `ListAccountingAddressResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountingAddressResponse$inboundSchema;
  /** @deprecated use `ListAccountingAddressResponse$outboundSchema` instead. */
  export const outboundSchema = ListAccountingAddressResponse$outboundSchema;
  /** @deprecated use `ListAccountingAddressResponse$Outbound` instead. */
  export type Outbound = ListAccountingAddressResponse$Outbound;
}

export function listAccountingAddressResponseToJSON(
  listAccountingAddressResponse: ListAccountingAddressResponse,
): string {
  return JSON.stringify(
    ListAccountingAddressResponse$outboundSchema.parse(
      listAccountingAddressResponse,
    ),
  );
}

export function listAccountingAddressResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAddressResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingAddressResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAddressResponse' from JSON`,
  );
}
