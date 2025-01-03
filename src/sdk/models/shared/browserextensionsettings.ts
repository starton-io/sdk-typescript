/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RpcHeaders = {};

export type BrowserExtensionSettings = {
  rpcHeaders?: Array<RpcHeaders> | undefined;
  rpcUrl: string;
};

/** @internal */
export const RpcHeaders$inboundSchema: z.ZodType<
  RpcHeaders,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type RpcHeaders$Outbound = {};

/** @internal */
export const RpcHeaders$outboundSchema: z.ZodType<
  RpcHeaders$Outbound,
  z.ZodTypeDef,
  RpcHeaders
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RpcHeaders$ {
  /** @deprecated use `RpcHeaders$inboundSchema` instead. */
  export const inboundSchema = RpcHeaders$inboundSchema;
  /** @deprecated use `RpcHeaders$outboundSchema` instead. */
  export const outboundSchema = RpcHeaders$outboundSchema;
  /** @deprecated use `RpcHeaders$Outbound` instead. */
  export type Outbound = RpcHeaders$Outbound;
}

export function rpcHeadersToJSON(rpcHeaders: RpcHeaders): string {
  return JSON.stringify(RpcHeaders$outboundSchema.parse(rpcHeaders));
}

export function rpcHeadersFromJSON(
  jsonString: string,
): SafeParseResult<RpcHeaders, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RpcHeaders$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RpcHeaders' from JSON`,
  );
}

/** @internal */
export const BrowserExtensionSettings$inboundSchema: z.ZodType<
  BrowserExtensionSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  rpcHeaders: z.array(z.lazy(() => RpcHeaders$inboundSchema)).optional(),
  rpcUrl: z.string(),
});

/** @internal */
export type BrowserExtensionSettings$Outbound = {
  rpcHeaders?: Array<RpcHeaders$Outbound> | undefined;
  rpcUrl: string;
};

/** @internal */
export const BrowserExtensionSettings$outboundSchema: z.ZodType<
  BrowserExtensionSettings$Outbound,
  z.ZodTypeDef,
  BrowserExtensionSettings
> = z.object({
  rpcHeaders: z.array(z.lazy(() => RpcHeaders$outboundSchema)).optional(),
  rpcUrl: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrowserExtensionSettings$ {
  /** @deprecated use `BrowserExtensionSettings$inboundSchema` instead. */
  export const inboundSchema = BrowserExtensionSettings$inboundSchema;
  /** @deprecated use `BrowserExtensionSettings$outboundSchema` instead. */
  export const outboundSchema = BrowserExtensionSettings$outboundSchema;
  /** @deprecated use `BrowserExtensionSettings$Outbound` instead. */
  export type Outbound = BrowserExtensionSettings$Outbound;
}

export function browserExtensionSettingsToJSON(
  browserExtensionSettings: BrowserExtensionSettings,
): string {
  return JSON.stringify(
    BrowserExtensionSettings$outboundSchema.parse(browserExtensionSettings),
  );
}

export function browserExtensionSettingsFromJSON(
  jsonString: string,
): SafeParseResult<BrowserExtensionSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrowserExtensionSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrowserExtensionSettings' from JSON`,
  );
}
