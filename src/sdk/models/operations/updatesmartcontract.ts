/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UpdateSmartContractRequest = {
  updateSmartContractDto: shared.UpdateSmartContractDto;
  /**
   * Smart contract address.
   */
  address: string;
  /**
   * EVM starton supported network.
   */
  network: string;
};

export type UpdateSmartContractResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  smartContract?: shared.SmartContract | undefined;
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
export const UpdateSmartContractRequest$inboundSchema: z.ZodType<
  UpdateSmartContractRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UpdateSmartContractDto: shared.UpdateSmartContractDto$inboundSchema,
  address: z.string(),
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    "UpdateSmartContractDto": "updateSmartContractDto",
  });
});

/** @internal */
export type UpdateSmartContractRequest$Outbound = {
  UpdateSmartContractDto: shared.UpdateSmartContractDto$Outbound;
  address: string;
  network: string;
};

/** @internal */
export const UpdateSmartContractRequest$outboundSchema: z.ZodType<
  UpdateSmartContractRequest$Outbound,
  z.ZodTypeDef,
  UpdateSmartContractRequest
> = z.object({
  updateSmartContractDto: shared.UpdateSmartContractDto$outboundSchema,
  address: z.string(),
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    updateSmartContractDto: "UpdateSmartContractDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractRequest$ {
  /** @deprecated use `UpdateSmartContractRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateSmartContractRequest$inboundSchema;
  /** @deprecated use `UpdateSmartContractRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateSmartContractRequest$outboundSchema;
  /** @deprecated use `UpdateSmartContractRequest$Outbound` instead. */
  export type Outbound = UpdateSmartContractRequest$Outbound;
}

export function updateSmartContractRequestToJSON(
  updateSmartContractRequest: UpdateSmartContractRequest,
): string {
  return JSON.stringify(
    UpdateSmartContractRequest$outboundSchema.parse(updateSmartContractRequest),
  );
}

export function updateSmartContractRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSmartContractRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSmartContractRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSmartContractRequest' from JSON`,
  );
}

/** @internal */
export const UpdateSmartContractResponse$inboundSchema: z.ZodType<
  UpdateSmartContractResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  SmartContract: shared.SmartContract$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "SmartContract": "smartContract",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UpdateSmartContractResponse$Outbound = {
  ContentType: string;
  SmartContract?: shared.SmartContract$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UpdateSmartContractResponse$outboundSchema: z.ZodType<
  UpdateSmartContractResponse$Outbound,
  z.ZodTypeDef,
  UpdateSmartContractResponse
> = z.object({
  contentType: z.string(),
  smartContract: shared.SmartContract$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    smartContract: "SmartContract",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractResponse$ {
  /** @deprecated use `UpdateSmartContractResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateSmartContractResponse$inboundSchema;
  /** @deprecated use `UpdateSmartContractResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateSmartContractResponse$outboundSchema;
  /** @deprecated use `UpdateSmartContractResponse$Outbound` instead. */
  export type Outbound = UpdateSmartContractResponse$Outbound;
}

export function updateSmartContractResponseToJSON(
  updateSmartContractResponse: UpdateSmartContractResponse,
): string {
  return JSON.stringify(
    UpdateSmartContractResponse$outboundSchema.parse(
      updateSmartContractResponse,
    ),
  );
}

export function updateSmartContractResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSmartContractResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSmartContractResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSmartContractResponse' from JSON`,
  );
}
