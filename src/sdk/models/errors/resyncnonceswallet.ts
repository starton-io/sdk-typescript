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
  CouldNotAssignNonce,
  CouldNotAssignNonce$inboundSchema,
  CouldNotAssignNonce$Outbound,
  CouldNotAssignNonce$outboundSchema,
} from "./couldnotassignnonce.js";
import {
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import {
  CouldNotProcessEntity,
  CouldNotProcessEntity$inboundSchema,
  CouldNotProcessEntity$Outbound,
  CouldNotProcessEntity$outboundSchema,
} from "./couldnotprocessentity.js";

export type ResyncNoncesWalletWalletTransactionManagerResponseResponseBody =
  CouldNotAssignNonce;

export type ResyncNoncesWalletWalletTransactionManagerResponseBody =
  CouldNotProcessEntity;

export type ResyncNoncesWalletWalletResponseBody = CouldNotFindResource;

export type ResyncNoncesWalletResponseBody = BadRequestException;

/** @internal */
export const ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$inboundSchema:
  z.ZodType<
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotAssignNonce$inboundSchema;

/** @internal */
export type ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$Outbound =
  CouldNotAssignNonce$Outbound;

/** @internal */
export const ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$outboundSchema:
  z.ZodType<
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody
  > = CouldNotAssignNonce$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$ {
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$inboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$outboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$Outbound` instead. */
  export type Outbound =
    ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$Outbound;
}

/** @internal */
export const ResyncNoncesWalletWalletTransactionManagerResponseBody$inboundSchema:
  z.ZodType<
    ResyncNoncesWalletWalletTransactionManagerResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotProcessEntity$inboundSchema;

/** @internal */
export type ResyncNoncesWalletWalletTransactionManagerResponseBody$Outbound =
  CouldNotProcessEntity$Outbound;

/** @internal */
export const ResyncNoncesWalletWalletTransactionManagerResponseBody$outboundSchema:
  z.ZodType<
    ResyncNoncesWalletWalletTransactionManagerResponseBody$Outbound,
    z.ZodTypeDef,
    ResyncNoncesWalletWalletTransactionManagerResponseBody
  > = CouldNotProcessEntity$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseBody$ {
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ResyncNoncesWalletWalletTransactionManagerResponseBody$inboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ResyncNoncesWalletWalletTransactionManagerResponseBody$outboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletTransactionManagerResponseBody$Outbound` instead. */
  export type Outbound =
    ResyncNoncesWalletWalletTransactionManagerResponseBody$Outbound;
}

/** @internal */
export const ResyncNoncesWalletWalletResponseBody$inboundSchema: z.ZodType<
  ResyncNoncesWalletWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type ResyncNoncesWalletWalletResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const ResyncNoncesWalletWalletResponseBody$outboundSchema: z.ZodType<
  ResyncNoncesWalletWalletResponseBody$Outbound,
  z.ZodTypeDef,
  ResyncNoncesWalletWalletResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncNoncesWalletWalletResponseBody$ {
  /** @deprecated use `ResyncNoncesWalletWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ResyncNoncesWalletWalletResponseBody$inboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ResyncNoncesWalletWalletResponseBody$outboundSchema;
  /** @deprecated use `ResyncNoncesWalletWalletResponseBody$Outbound` instead. */
  export type Outbound = ResyncNoncesWalletWalletResponseBody$Outbound;
}

/** @internal */
export const ResyncNoncesWalletResponseBody$inboundSchema: z.ZodType<
  ResyncNoncesWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type ResyncNoncesWalletResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const ResyncNoncesWalletResponseBody$outboundSchema: z.ZodType<
  ResyncNoncesWalletResponseBody$Outbound,
  z.ZodTypeDef,
  ResyncNoncesWalletResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncNoncesWalletResponseBody$ {
  /** @deprecated use `ResyncNoncesWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResyncNoncesWalletResponseBody$inboundSchema;
  /** @deprecated use `ResyncNoncesWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResyncNoncesWalletResponseBody$outboundSchema;
  /** @deprecated use `ResyncNoncesWalletResponseBody$Outbound` instead. */
  export type Outbound = ResyncNoncesWalletResponseBody$Outbound;
}
