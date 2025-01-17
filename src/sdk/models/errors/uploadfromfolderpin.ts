/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  BadRequestException,
  BadRequestException$inboundSchema,
  BadRequestException$Outbound,
  BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
  MaximumStorageReached,
  MaximumStorageReached$inboundSchema,
  MaximumStorageReached$Outbound,
  MaximumStorageReached$outboundSchema,
} from "./maximumstoragereached.js";
import {
  PayloadTooLarge,
  PayloadTooLarge$inboundSchema,
  PayloadTooLarge$Outbound,
  PayloadTooLarge$outboundSchema,
} from "./payloadtoolarge.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type UploadFromFolderPinIpfsResponseBody =
  | MaximumStorageReached
  | PayloadTooLarge;

export type UploadFromFolderPinResponseBody = BadRequestException;

/** @internal */
export const UploadFromFolderPinIpfsResponseBody$inboundSchema: z.ZodType<
  UploadFromFolderPinIpfsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  MaximumStorageReached$inboundSchema,
  PayloadTooLarge$inboundSchema,
]);

/** @internal */
export type UploadFromFolderPinIpfsResponseBody$Outbound =
  | MaximumStorageReached$Outbound
  | PayloadTooLarge$Outbound;

/** @internal */
export const UploadFromFolderPinIpfsResponseBody$outboundSchema: z.ZodType<
  UploadFromFolderPinIpfsResponseBody$Outbound,
  z.ZodTypeDef,
  UploadFromFolderPinIpfsResponseBody
> = z.union([
  MaximumStorageReached$outboundSchema,
  PayloadTooLarge$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFromFolderPinIpfsResponseBody$ {
  /** @deprecated use `UploadFromFolderPinIpfsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UploadFromFolderPinIpfsResponseBody$inboundSchema;
  /** @deprecated use `UploadFromFolderPinIpfsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UploadFromFolderPinIpfsResponseBody$outboundSchema;
  /** @deprecated use `UploadFromFolderPinIpfsResponseBody$Outbound` instead. */
  export type Outbound = UploadFromFolderPinIpfsResponseBody$Outbound;
}

export function uploadFromFolderPinIpfsResponseBodyToJSON(
  uploadFromFolderPinIpfsResponseBody: UploadFromFolderPinIpfsResponseBody,
): string {
  return JSON.stringify(
    UploadFromFolderPinIpfsResponseBody$outboundSchema.parse(
      uploadFromFolderPinIpfsResponseBody,
    ),
  );
}

export function uploadFromFolderPinIpfsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadFromFolderPinIpfsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UploadFromFolderPinIpfsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFromFolderPinIpfsResponseBody' from JSON`,
  );
}

/** @internal */
export const UploadFromFolderPinResponseBody$inboundSchema: z.ZodType<
  UploadFromFolderPinResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type UploadFromFolderPinResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const UploadFromFolderPinResponseBody$outboundSchema: z.ZodType<
  UploadFromFolderPinResponseBody$Outbound,
  z.ZodTypeDef,
  UploadFromFolderPinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFromFolderPinResponseBody$ {
  /** @deprecated use `UploadFromFolderPinResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadFromFolderPinResponseBody$inboundSchema;
  /** @deprecated use `UploadFromFolderPinResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadFromFolderPinResponseBody$outboundSchema;
  /** @deprecated use `UploadFromFolderPinResponseBody$Outbound` instead. */
  export type Outbound = UploadFromFolderPinResponseBody$Outbound;
}

export function uploadFromFolderPinResponseBodyToJSON(
  uploadFromFolderPinResponseBody: UploadFromFolderPinResponseBody,
): string {
  return JSON.stringify(
    UploadFromFolderPinResponseBody$outboundSchema.parse(
      uploadFromFolderPinResponseBody,
    ),
  );
}

export function uploadFromFolderPinResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadFromFolderPinResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFromFolderPinResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFromFolderPinResponseBody' from JSON`,
  );
}
