/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum PassThroughRequestDtoMethod {
  Get = "GET",
  Post = "POST",
}

export type Data = {};

export type RequestFormat = { [k: string]: any } | Array<{ [k: string]: any }>;

export type Headers = {};

export type PassThroughRequestDto = {
  method: PassThroughRequestDtoMethod;
  path: string | null;
  data?: Data | undefined;
  requestFormat?:
    | { [k: string]: any }
    | Array<{ [k: string]: any }>
    | null
    | undefined;
  overrideBaseUrl?: { [k: string]: any } | null | undefined;
  headers?: Headers | undefined;
};

/** @internal */
export const PassThroughRequestDtoMethod$inboundSchema: z.ZodNativeEnum<
  typeof PassThroughRequestDtoMethod
> = z.nativeEnum(PassThroughRequestDtoMethod);

/** @internal */
export const PassThroughRequestDtoMethod$outboundSchema: z.ZodNativeEnum<
  typeof PassThroughRequestDtoMethod
> = PassThroughRequestDtoMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PassThroughRequestDtoMethod$ {
  /** @deprecated use `PassThroughRequestDtoMethod$inboundSchema` instead. */
  export const inboundSchema = PassThroughRequestDtoMethod$inboundSchema;
  /** @deprecated use `PassThroughRequestDtoMethod$outboundSchema` instead. */
  export const outboundSchema = PassThroughRequestDtoMethod$outboundSchema;
}

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Data$Outbound = {};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const RequestFormat$inboundSchema: z.ZodType<
  RequestFormat,
  z.ZodTypeDef,
  unknown
> = z.union([z.record(z.any()), z.array(z.record(z.any()))]);

/** @internal */
export type RequestFormat$Outbound =
  | { [k: string]: any }
  | Array<{ [k: string]: any }>;

/** @internal */
export const RequestFormat$outboundSchema: z.ZodType<
  RequestFormat$Outbound,
  z.ZodTypeDef,
  RequestFormat
> = z.union([z.record(z.any()), z.array(z.record(z.any()))]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestFormat$ {
  /** @deprecated use `RequestFormat$inboundSchema` instead. */
  export const inboundSchema = RequestFormat$inboundSchema;
  /** @deprecated use `RequestFormat$outboundSchema` instead. */
  export const outboundSchema = RequestFormat$outboundSchema;
  /** @deprecated use `RequestFormat$Outbound` instead. */
  export type Outbound = RequestFormat$Outbound;
}

export function requestFormatToJSON(requestFormat: RequestFormat): string {
  return JSON.stringify(RequestFormat$outboundSchema.parse(requestFormat));
}

export function requestFormatFromJSON(
  jsonString: string,
): SafeParseResult<RequestFormat, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestFormat$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestFormat' from JSON`,
  );
}

/** @internal */
export const Headers$inboundSchema: z.ZodType<Headers, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Headers$Outbound = {};

/** @internal */
export const Headers$outboundSchema: z.ZodType<
  Headers$Outbound,
  z.ZodTypeDef,
  Headers
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Headers$ {
  /** @deprecated use `Headers$inboundSchema` instead. */
  export const inboundSchema = Headers$inboundSchema;
  /** @deprecated use `Headers$outboundSchema` instead. */
  export const outboundSchema = Headers$outboundSchema;
  /** @deprecated use `Headers$Outbound` instead. */
  export type Outbound = Headers$Outbound;
}

export function headersToJSON(headers: Headers): string {
  return JSON.stringify(Headers$outboundSchema.parse(headers));
}

export function headersFromJSON(
  jsonString: string,
): SafeParseResult<Headers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Headers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Headers' from JSON`,
  );
}

/** @internal */
export const PassThroughRequestDto$inboundSchema: z.ZodType<
  PassThroughRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  method: PassThroughRequestDtoMethod$inboundSchema,
  path: z.nullable(z.string()),
  data: z.lazy(() => Data$inboundSchema).optional(),
  request_format: z.nullable(
    z.union([z.record(z.any()), z.array(z.record(z.any()))]),
  ).optional(),
  overrideBaseUrl: z.nullable(z.record(z.any())).optional(),
  headers: z.lazy(() => Headers$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "request_format": "requestFormat",
  });
});

/** @internal */
export type PassThroughRequestDto$Outbound = {
  method: string;
  path: string | null;
  data?: Data$Outbound | undefined;
  request_format?:
    | { [k: string]: any }
    | Array<{ [k: string]: any }>
    | null
    | undefined;
  overrideBaseUrl?: { [k: string]: any } | null | undefined;
  headers?: Headers$Outbound | undefined;
};

/** @internal */
export const PassThroughRequestDto$outboundSchema: z.ZodType<
  PassThroughRequestDto$Outbound,
  z.ZodTypeDef,
  PassThroughRequestDto
> = z.object({
  method: PassThroughRequestDtoMethod$outboundSchema,
  path: z.nullable(z.string()),
  data: z.lazy(() => Data$outboundSchema).optional(),
  requestFormat: z.nullable(
    z.union([z.record(z.any()), z.array(z.record(z.any()))]),
  ).optional(),
  overrideBaseUrl: z.nullable(z.record(z.any())).optional(),
  headers: z.lazy(() => Headers$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestFormat: "request_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PassThroughRequestDto$ {
  /** @deprecated use `PassThroughRequestDto$inboundSchema` instead. */
  export const inboundSchema = PassThroughRequestDto$inboundSchema;
  /** @deprecated use `PassThroughRequestDto$outboundSchema` instead. */
  export const outboundSchema = PassThroughRequestDto$outboundSchema;
  /** @deprecated use `PassThroughRequestDto$Outbound` instead. */
  export type Outbound = PassThroughRequestDto$Outbound;
}

export function passThroughRequestDtoToJSON(
  passThroughRequestDto: PassThroughRequestDto,
): string {
  return JSON.stringify(
    PassThroughRequestDto$outboundSchema.parse(passThroughRequestDto),
  );
}

export function passThroughRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<PassThroughRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PassThroughRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PassThroughRequestDto' from JSON`,
  );
}
