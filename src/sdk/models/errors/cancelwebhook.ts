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
  CouldNotCancelWebhook,
  CouldNotCancelWebhook$inboundSchema,
  CouldNotCancelWebhook$Outbound,
  CouldNotCancelWebhook$outboundSchema,
} from "./couldnotcancelwebhook.js";
import {
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";

export type CancelWebhookWebhookResponseResponseBody = CouldNotCancelWebhook;

export type CancelWebhookWebhookResponseBody = CouldNotFindResource;

export type CancelWebhookResponseBody = BadRequestException;

/** @internal */
export const CancelWebhookWebhookResponseResponseBody$inboundSchema: z.ZodType<
  CancelWebhookWebhookResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotCancelWebhook$inboundSchema;

/** @internal */
export type CancelWebhookWebhookResponseResponseBody$Outbound =
  CouldNotCancelWebhook$Outbound;

/** @internal */
export const CancelWebhookWebhookResponseResponseBody$outboundSchema: z.ZodType<
  CancelWebhookWebhookResponseResponseBody$Outbound,
  z.ZodTypeDef,
  CancelWebhookWebhookResponseResponseBody
> = CouldNotCancelWebhook$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelWebhookWebhookResponseResponseBody$ {
  /** @deprecated use `CancelWebhookWebhookResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CancelWebhookWebhookResponseResponseBody$inboundSchema;
  /** @deprecated use `CancelWebhookWebhookResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CancelWebhookWebhookResponseResponseBody$outboundSchema;
  /** @deprecated use `CancelWebhookWebhookResponseResponseBody$Outbound` instead. */
  export type Outbound = CancelWebhookWebhookResponseResponseBody$Outbound;
}

/** @internal */
export const CancelWebhookWebhookResponseBody$inboundSchema: z.ZodType<
  CancelWebhookWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type CancelWebhookWebhookResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const CancelWebhookWebhookResponseBody$outboundSchema: z.ZodType<
  CancelWebhookWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  CancelWebhookWebhookResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelWebhookWebhookResponseBody$ {
  /** @deprecated use `CancelWebhookWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = CancelWebhookWebhookResponseBody$inboundSchema;
  /** @deprecated use `CancelWebhookWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = CancelWebhookWebhookResponseBody$outboundSchema;
  /** @deprecated use `CancelWebhookWebhookResponseBody$Outbound` instead. */
  export type Outbound = CancelWebhookWebhookResponseBody$Outbound;
}

/** @internal */
export const CancelWebhookResponseBody$inboundSchema: z.ZodType<
  CancelWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type CancelWebhookResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const CancelWebhookResponseBody$outboundSchema: z.ZodType<
  CancelWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  CancelWebhookResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelWebhookResponseBody$ {
  /** @deprecated use `CancelWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = CancelWebhookResponseBody$inboundSchema;
  /** @deprecated use `CancelWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = CancelWebhookResponseBody$outboundSchema;
  /** @deprecated use `CancelWebhookResponseBody$Outbound` instead. */
  export type Outbound = CancelWebhookResponseBody$Outbound;
}
