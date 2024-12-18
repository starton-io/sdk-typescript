/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateKmsRequest = {
  updateKmsDto: shared.UpdateKmsDto;
  /**
   * The unique identifier of the KMS entry to update.
   */
  id: string;
};

export type UpdateKmsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  kms?: shared.Kms | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const UpdateKmsRequest$inboundSchema: z.ZodType<
  UpdateKmsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdateKmsDto: shared.UpdateKmsDto$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdateKmsDto": "updateKmsDto",
  });
});

/** @internal */
export type UpdateKmsRequest$Outbound = {
  UpdateKmsDto: shared.UpdateKmsDto$Outbound;
  id: string;
};

/** @internal */
export const UpdateKmsRequest$outboundSchema: z.ZodType<
  UpdateKmsRequest$Outbound,
  z.ZodTypeDef,
  UpdateKmsRequest
> = z.object({
  updateKmsDto: shared.UpdateKmsDto$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    updateKmsDto: "UpdateKmsDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsRequest$ {
  /** @deprecated use `UpdateKmsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsRequest$inboundSchema;
  /** @deprecated use `UpdateKmsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsRequest$outboundSchema;
  /** @deprecated use `UpdateKmsRequest$Outbound` instead. */
  export type Outbound = UpdateKmsRequest$Outbound;
}

export function updateKmsRequestToJSON(
  updateKmsRequest: UpdateKmsRequest,
): string {
  return JSON.stringify(
    UpdateKmsRequest$outboundSchema.parse(updateKmsRequest),
  );
}

export function updateKmsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsRequest' from JSON`,
  );
}

/** @internal */
export const UpdateKmsResponse$inboundSchema: z.ZodType<
  UpdateKmsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Kms: shared.Kms$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Kms": "kms",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateKmsResponse$Outbound = {
  ContentType: string;
  Kms?: shared.Kms$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateKmsResponse$outboundSchema: z.ZodType<
  UpdateKmsResponse$Outbound,
  z.ZodTypeDef,
  UpdateKmsResponse
> = z.object({
  contentType: z.string(),
  kms: shared.Kms$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    kms: "Kms",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateKmsResponse$ {
  /** @deprecated use `UpdateKmsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateKmsResponse$inboundSchema;
  /** @deprecated use `UpdateKmsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateKmsResponse$outboundSchema;
  /** @deprecated use `UpdateKmsResponse$Outbound` instead. */
  export type Outbound = UpdateKmsResponse$Outbound;
}

export function updateKmsResponseToJSON(
  updateKmsResponse: UpdateKmsResponse,
): string {
  return JSON.stringify(
    UpdateKmsResponse$outboundSchema.parse(updateKmsResponse),
  );
}

export function updateKmsResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateKmsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateKmsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateKmsResponse' from JSON`,
  );
}
