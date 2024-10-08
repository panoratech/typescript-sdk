/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateHrisEmployeeRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original Hris software.
   */
  remoteData?: boolean | undefined;
  unifiedHrisEmployeeInput: components.UnifiedHrisEmployeeInput;
};

/** @internal */
export const CreateHrisEmployeeRequest$inboundSchema: z.ZodType<
  CreateHrisEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  UnifiedHrisEmployeeInput: components.UnifiedHrisEmployeeInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
    "UnifiedHrisEmployeeInput": "unifiedHrisEmployeeInput",
  });
});

/** @internal */
export type CreateHrisEmployeeRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  UnifiedHrisEmployeeInput: components.UnifiedHrisEmployeeInput$Outbound;
};

/** @internal */
export const CreateHrisEmployeeRequest$outboundSchema: z.ZodType<
  CreateHrisEmployeeRequest$Outbound,
  z.ZodTypeDef,
  CreateHrisEmployeeRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  unifiedHrisEmployeeInput: components.UnifiedHrisEmployeeInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
    unifiedHrisEmployeeInput: "UnifiedHrisEmployeeInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisEmployeeRequest$ {
  /** @deprecated use `CreateHrisEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = CreateHrisEmployeeRequest$inboundSchema;
  /** @deprecated use `CreateHrisEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = CreateHrisEmployeeRequest$outboundSchema;
  /** @deprecated use `CreateHrisEmployeeRequest$Outbound` instead. */
  export type Outbound = CreateHrisEmployeeRequest$Outbound;
}
