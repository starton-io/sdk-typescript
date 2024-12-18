/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdatePinRequest = {
  /**
   * An object containing the fields you wish to update for the specified file. Can include 'name' and 'metadata'.
   */
  updatePinDto: shared.UpdatePinDto;
  /**
   * The unique identifier for the file you wish to update. This ID is assigned upon the initial upload of the file to IPFS.
   */
  id: string;
};

export type UpdatePinResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  pin?: shared.Pin | undefined;
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
export const UpdatePinRequest$inboundSchema: z.ZodType<
  UpdatePinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdatePinDto: shared.UpdatePinDto$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdatePinDto": "updatePinDto",
  });
});

/** @internal */
export type UpdatePinRequest$Outbound = {
  UpdatePinDto: shared.UpdatePinDto$Outbound;
  id: string;
};

/** @internal */
export const UpdatePinRequest$outboundSchema: z.ZodType<
  UpdatePinRequest$Outbound,
  z.ZodTypeDef,
  UpdatePinRequest
> = z.object({
  updatePinDto: shared.UpdatePinDto$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    updatePinDto: "UpdatePinDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePinRequest$ {
  /** @deprecated use `UpdatePinRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePinRequest$inboundSchema;
  /** @deprecated use `UpdatePinRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePinRequest$outboundSchema;
  /** @deprecated use `UpdatePinRequest$Outbound` instead. */
  export type Outbound = UpdatePinRequest$Outbound;
}

export function updatePinRequestToJSON(
  updatePinRequest: UpdatePinRequest,
): string {
  return JSON.stringify(
    UpdatePinRequest$outboundSchema.parse(updatePinRequest),
  );
}

export function updatePinRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePinRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePinRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePinRequest' from JSON`,
  );
}

/** @internal */
export const UpdatePinResponse$inboundSchema: z.ZodType<
  UpdatePinResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Pin: shared.Pin$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Pin": "pin",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdatePinResponse$Outbound = {
  ContentType: string;
  Pin?: shared.Pin$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdatePinResponse$outboundSchema: z.ZodType<
  UpdatePinResponse$Outbound,
  z.ZodTypeDef,
  UpdatePinResponse
> = z.object({
  contentType: z.string(),
  pin: shared.Pin$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    pin: "Pin",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePinResponse$ {
  /** @deprecated use `UpdatePinResponse$inboundSchema` instead. */
  export const inboundSchema = UpdatePinResponse$inboundSchema;
  /** @deprecated use `UpdatePinResponse$outboundSchema` instead. */
  export const outboundSchema = UpdatePinResponse$outboundSchema;
  /** @deprecated use `UpdatePinResponse$Outbound` instead. */
  export type Outbound = UpdatePinResponse$Outbound;
}

export function updatePinResponseToJSON(
  updatePinResponse: UpdatePinResponse,
): string {
  return JSON.stringify(
    UpdatePinResponse$outboundSchema.parse(updatePinResponse),
  );
}

export function updatePinResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePinResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePinResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePinResponse' from JSON`,
  );
}
