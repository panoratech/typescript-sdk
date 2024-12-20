/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveMarketingautomationAutomationRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * id of the automation you want to retrieve.
   */
  id: string;
  /**
   * Set to true to include data from the original Marketingautomation software.
   */
  remoteData?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationAutomationRequest$inboundSchema:
  z.ZodType<
    RetrieveMarketingautomationAutomationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "x-connection-token": z.string(),
    id: z.string(),
    remote_data: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "x-connection-token": "xConnectionToken",
      "remote_data": "remoteData",
    });
  });

/** @internal */
export type RetrieveMarketingautomationAutomationRequest$Outbound = {
  "x-connection-token": string;
  id: string;
  remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveMarketingautomationAutomationRequest$outboundSchema:
  z.ZodType<
    RetrieveMarketingautomationAutomationRequest$Outbound,
    z.ZodTypeDef,
    RetrieveMarketingautomationAutomationRequest
  > = z.object({
    xConnectionToken: z.string(),
    id: z.string(),
    remoteData: z.boolean().optional(),
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
export namespace RetrieveMarketingautomationAutomationRequest$ {
  /** @deprecated use `RetrieveMarketingautomationAutomationRequest$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveMarketingautomationAutomationRequest$inboundSchema;
  /** @deprecated use `RetrieveMarketingautomationAutomationRequest$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveMarketingautomationAutomationRequest$outboundSchema;
  /** @deprecated use `RetrieveMarketingautomationAutomationRequest$Outbound` instead. */
  export type Outbound = RetrieveMarketingautomationAutomationRequest$Outbound;
}

export function retrieveMarketingautomationAutomationRequestToJSON(
  retrieveMarketingautomationAutomationRequest:
    RetrieveMarketingautomationAutomationRequest,
): string {
  return JSON.stringify(
    RetrieveMarketingautomationAutomationRequest$outboundSchema.parse(
      retrieveMarketingautomationAutomationRequest,
    ),
  );
}

export function retrieveMarketingautomationAutomationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RetrieveMarketingautomationAutomationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RetrieveMarketingautomationAutomationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RetrieveMarketingautomationAutomationRequest' from JSON`,
  );
}
