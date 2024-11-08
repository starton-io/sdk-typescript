/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BadRequestException,
  BadRequestException$inboundSchema,
  BadRequestException$Outbound,
  BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
  CouldNotPerformRequest,
  CouldNotPerformRequest$inboundSchema,
  CouldNotPerformRequest$Outbound,
  CouldNotPerformRequest$outboundSchema,
} from "./couldnotperformrequest.js";
import {
  MicroserviceNotResponding,
  MicroserviceNotResponding$inboundSchema,
  MicroserviceNotResponding$Outbound,
  MicroserviceNotResponding$outboundSchema,
} from "./microservicenotresponding.js";

export type ClaimFaucetWalletResponseBody =
  | MicroserviceNotResponding
  | CouldNotPerformRequest;

export type ClaimFaucetResponseBody = BadRequestException;

/** @internal */
export const ClaimFaucetWalletResponseBody$inboundSchema: z.ZodType<
  ClaimFaucetWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  MicroserviceNotResponding$inboundSchema,
  CouldNotPerformRequest$inboundSchema,
]);

/** @internal */
export type ClaimFaucetWalletResponseBody$Outbound =
  | MicroserviceNotResponding$Outbound
  | CouldNotPerformRequest$Outbound;

/** @internal */
export const ClaimFaucetWalletResponseBody$outboundSchema: z.ZodType<
  ClaimFaucetWalletResponseBody$Outbound,
  z.ZodTypeDef,
  ClaimFaucetWalletResponseBody
> = z.union([
  MicroserviceNotResponding$outboundSchema,
  CouldNotPerformRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClaimFaucetWalletResponseBody$ {
  /** @deprecated use `ClaimFaucetWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema = ClaimFaucetWalletResponseBody$inboundSchema;
  /** @deprecated use `ClaimFaucetWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema = ClaimFaucetWalletResponseBody$outboundSchema;
  /** @deprecated use `ClaimFaucetWalletResponseBody$Outbound` instead. */
  export type Outbound = ClaimFaucetWalletResponseBody$Outbound;
}

/** @internal */
export const ClaimFaucetResponseBody$inboundSchema: z.ZodType<
  ClaimFaucetResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type ClaimFaucetResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const ClaimFaucetResponseBody$outboundSchema: z.ZodType<
  ClaimFaucetResponseBody$Outbound,
  z.ZodTypeDef,
  ClaimFaucetResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClaimFaucetResponseBody$ {
  /** @deprecated use `ClaimFaucetResponseBody$inboundSchema` instead. */
  export const inboundSchema = ClaimFaucetResponseBody$inboundSchema;
  /** @deprecated use `ClaimFaucetResponseBody$outboundSchema` instead. */
  export const outboundSchema = ClaimFaucetResponseBody$outboundSchema;
  /** @deprecated use `ClaimFaucetResponseBody$Outbound` instead. */
  export type Outbound = ClaimFaucetResponseBody$Outbound;
}
