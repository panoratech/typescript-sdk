/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateLinkedUserDto = {
  /**
   * The id of the user in the context of your own software
   */
  linkedUserOriginId: string;
  /**
   * Your company alias
   */
  alias: string | null;
};

/** @internal */
export const CreateLinkedUserDto$inboundSchema: z.ZodType<
  CreateLinkedUserDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  linked_user_origin_id: z.string(),
  alias: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "linked_user_origin_id": "linkedUserOriginId",
  });
});

/** @internal */
export type CreateLinkedUserDto$Outbound = {
  linked_user_origin_id: string;
  alias: string | null;
};

/** @internal */
export const CreateLinkedUserDto$outboundSchema: z.ZodType<
  CreateLinkedUserDto$Outbound,
  z.ZodTypeDef,
  CreateLinkedUserDto
> = z.object({
  linkedUserOriginId: z.string(),
  alias: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    linkedUserOriginId: "linked_user_origin_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLinkedUserDto$ {
  /** @deprecated use `CreateLinkedUserDto$inboundSchema` instead. */
  export const inboundSchema = CreateLinkedUserDto$inboundSchema;
  /** @deprecated use `CreateLinkedUserDto$outboundSchema` instead. */
  export const outboundSchema = CreateLinkedUserDto$outboundSchema;
  /** @deprecated use `CreateLinkedUserDto$Outbound` instead. */
  export type Outbound = CreateLinkedUserDto$Outbound;
}
