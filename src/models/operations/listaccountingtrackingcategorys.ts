/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingTrackingCategorysRequest = {
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

export type ListAccountingTrackingCategorysResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingTrackingcategoryOutput>;
};

export type ListAccountingTrackingCategorysResponse = {
  result: ListAccountingTrackingCategorysResponseBody;
};

/** @internal */
export const ListAccountingTrackingCategorysRequest$inboundSchema: z.ZodType<
  ListAccountingTrackingCategorysRequest,
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
export type ListAccountingTrackingCategorysRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingTrackingCategorysRequest$outboundSchema: z.ZodType<
  ListAccountingTrackingCategorysRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingTrackingCategorysRequest
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
export namespace ListAccountingTrackingCategorysRequest$ {
  /** @deprecated use `ListAccountingTrackingCategorysRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingTrackingCategorysRequest$inboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingTrackingCategorysRequest$outboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysRequest$Outbound` instead. */
  export type Outbound = ListAccountingTrackingCategorysRequest$Outbound;
}

export function listAccountingTrackingCategorysRequestToJSON(
  listAccountingTrackingCategorysRequest:
    ListAccountingTrackingCategorysRequest,
): string {
  return JSON.stringify(
    ListAccountingTrackingCategorysRequest$outboundSchema.parse(
      listAccountingTrackingCategorysRequest,
    ),
  );
}

export function listAccountingTrackingCategorysRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingTrackingCategorysRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingTrackingCategorysRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingTrackingCategorysRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingTrackingCategorysResponseBody$inboundSchema:
  z.ZodType<
    ListAccountingTrackingCategorysResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    prev_cursor: z.nullable(z.string()),
    next_cursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedAccountingTrackingcategoryOutput$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "prev_cursor": "prevCursor",
      "next_cursor": "nextCursor",
    });
  });

/** @internal */
export type ListAccountingTrackingCategorysResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingTrackingcategoryOutput$Outbound>;
};

/** @internal */
export const ListAccountingTrackingCategorysResponseBody$outboundSchema:
  z.ZodType<
    ListAccountingTrackingCategorysResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingTrackingCategorysResponseBody
  > = z.object({
    prevCursor: z.nullable(z.string()),
    nextCursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedAccountingTrackingcategoryOutput$outboundSchema,
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
export namespace ListAccountingTrackingCategorysResponseBody$ {
  /** @deprecated use `ListAccountingTrackingCategorysResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingTrackingCategorysResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingTrackingCategorysResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingTrackingCategorysResponseBody$Outbound;
}

export function listAccountingTrackingCategorysResponseBodyToJSON(
  listAccountingTrackingCategorysResponseBody:
    ListAccountingTrackingCategorysResponseBody,
): string {
  return JSON.stringify(
    ListAccountingTrackingCategorysResponseBody$outboundSchema.parse(
      listAccountingTrackingCategorysResponseBody,
    ),
  );
}

export function listAccountingTrackingCategorysResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ListAccountingTrackingCategorysResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingTrackingCategorysResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListAccountingTrackingCategorysResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingTrackingCategorysResponse$inboundSchema: z.ZodType<
  ListAccountingTrackingCategorysResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ListAccountingTrackingCategorysResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingTrackingCategorysResponse$Outbound = {
  Result: ListAccountingTrackingCategorysResponseBody$Outbound;
};

/** @internal */
export const ListAccountingTrackingCategorysResponse$outboundSchema: z.ZodType<
  ListAccountingTrackingCategorysResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingTrackingCategorysResponse
> = z.object({
  result: z.lazy(() =>
    ListAccountingTrackingCategorysResponseBody$outboundSchema
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
export namespace ListAccountingTrackingCategorysResponse$ {
  /** @deprecated use `ListAccountingTrackingCategorysResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingTrackingCategorysResponse$inboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingTrackingCategorysResponse$outboundSchema;
  /** @deprecated use `ListAccountingTrackingCategorysResponse$Outbound` instead. */
  export type Outbound = ListAccountingTrackingCategorysResponse$Outbound;
}

export function listAccountingTrackingCategorysResponseToJSON(
  listAccountingTrackingCategorysResponse:
    ListAccountingTrackingCategorysResponse,
): string {
  return JSON.stringify(
    ListAccountingTrackingCategorysResponse$outboundSchema.parse(
      listAccountingTrackingCategorysResponse,
    ),
  );
}

export function listAccountingTrackingCategorysResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListAccountingTrackingCategorysResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingTrackingCategorysResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListAccountingTrackingCategorysResponse' from JSON`,
  );
}
