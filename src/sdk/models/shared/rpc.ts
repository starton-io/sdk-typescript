/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum RpcType {
  Archive = "archive",
  Full = "full",
}

export type Rpc = {
  createdAt?: Date | undefined;
  id: string;
  isPublic: boolean;
  networkName: string;
  type: RpcType;
  updatedAt?: Date | undefined;
  url: string;
};

/** @internal */
export const RpcType$inboundSchema: z.ZodNativeEnum<typeof RpcType> = z
  .nativeEnum(RpcType);

/** @internal */
export const RpcType$outboundSchema: z.ZodNativeEnum<typeof RpcType> =
  RpcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RpcType$ {
  /** @deprecated use `RpcType$inboundSchema` instead. */
  export const inboundSchema = RpcType$inboundSchema;
  /** @deprecated use `RpcType$outboundSchema` instead. */
  export const outboundSchema = RpcType$outboundSchema;
}

/** @internal */
export const Rpc$inboundSchema: z.ZodType<Rpc, z.ZodTypeDef, unknown> = z
  .object({
    createdAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T17:59:53.167Z",
    ).transform(v => new Date(v)),
    id: z.string(),
    isPublic: z.boolean(),
    networkName: z.string(),
    type: RpcType$inboundSchema,
    updatedAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T17:59:53.167Z",
    ).transform(v => new Date(v)),
    url: z.string(),
  });

/** @internal */
export type Rpc$Outbound = {
  createdAt: string;
  id: string;
  isPublic: boolean;
  networkName: string;
  type: string;
  updatedAt: string;
  url: string;
};

/** @internal */
export const Rpc$outboundSchema: z.ZodType<Rpc$Outbound, z.ZodTypeDef, Rpc> = z
  .object({
    createdAt: z.date().default(() => new Date("2024-10-07T17:59:53.167Z"))
      .transform(v => v.toISOString()),
    id: z.string(),
    isPublic: z.boolean(),
    networkName: z.string(),
    type: RpcType$outboundSchema,
    updatedAt: z.date().default(() => new Date("2024-10-07T17:59:53.167Z"))
      .transform(v => v.toISOString()),
    url: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Rpc$ {
  /** @deprecated use `Rpc$inboundSchema` instead. */
  export const inboundSchema = Rpc$inboundSchema;
  /** @deprecated use `Rpc$outboundSchema` instead. */
  export const outboundSchema = Rpc$outboundSchema;
  /** @deprecated use `Rpc$Outbound` instead. */
  export type Outbound = Rpc$Outbound;
}

export function rpcToJSON(rpc: Rpc): string {
  return JSON.stringify(Rpc$outboundSchema.parse(rpc));
}

export function rpcFromJSON(
  jsonString: string,
): SafeParseResult<Rpc, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Rpc$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Rpc' from JSON`,
  );
}
