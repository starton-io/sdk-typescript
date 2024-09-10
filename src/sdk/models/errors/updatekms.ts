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
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";

export type UpdateKmsKmsResponseBody = CouldNotFindResource;

export type UpdateKmsResponseBody = BadRequestException;

/** @internal */
export const UpdateKmsKmsResponseBody$inboundSchema: z.ZodType<
  UpdateKmsKmsResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type UpdateKmsKmsResponseBody$Outbound = CouldNotFindResource$Outbound;

/** @internal */
export const UpdateKmsKmsResponseBody$outboundSchema: z.ZodType<
  UpdateKmsKmsResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateKmsKmsResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsKmsResponseBody$ {
  /** @deprecated use `UpdateKmsKmsResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsKmsResponseBody$inboundSchema;
  /** @deprecated use `UpdateKmsKmsResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsKmsResponseBody$outboundSchema;
  /** @deprecated use `UpdateKmsKmsResponseBody$Outbound` instead. */
  export type Outbound = UpdateKmsKmsResponseBody$Outbound;
}

/** @internal */
export const UpdateKmsResponseBody$inboundSchema: z.ZodType<
  UpdateKmsResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type UpdateKmsResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const UpdateKmsResponseBody$outboundSchema: z.ZodType<
  UpdateKmsResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateKmsResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsResponseBody$ {
  /** @deprecated use `UpdateKmsResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsResponseBody$inboundSchema;
  /** @deprecated use `UpdateKmsResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsResponseBody$outboundSchema;
  /** @deprecated use `UpdateKmsResponseBody$Outbound` instead. */
  export type Outbound = UpdateKmsResponseBody$Outbound;
}
