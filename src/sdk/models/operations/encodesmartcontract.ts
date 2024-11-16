/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type EncodeSmartContractRequest = {
  /**
   * Encode your smartcontract call.
   */
  encodeDto: shared.EncodeDto;
  /**
   * Smart contract address.
   */
  address: string;
  /**
   * EVM starton supported network.
   */
  network: string;
};

export type EncodeSmartContractResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  encodeSmartContractResponse?: shared.EncodeSmartContractResponse | undefined;
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
export const EncodeSmartContractRequest$inboundSchema: z.ZodType<
  EncodeSmartContractRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  EncodeDto: shared.EncodeDto$inboundSchema,
  address: z.string(),
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    "EncodeDto": "encodeDto",
  });
});

/** @internal */
export type EncodeSmartContractRequest$Outbound = {
  EncodeDto: shared.EncodeDto$Outbound;
  address: string;
  network: string;
};

/** @internal */
export const EncodeSmartContractRequest$outboundSchema: z.ZodType<
  EncodeSmartContractRequest$Outbound,
  z.ZodTypeDef,
  EncodeSmartContractRequest
> = z.object({
  encodeDto: shared.EncodeDto$outboundSchema,
  address: z.string(),
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    encodeDto: "EncodeDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeSmartContractRequest$ {
  /** @deprecated use `EncodeSmartContractRequest$inboundSchema` instead. */
  export const inboundSchema = EncodeSmartContractRequest$inboundSchema;
  /** @deprecated use `EncodeSmartContractRequest$outboundSchema` instead. */
  export const outboundSchema = EncodeSmartContractRequest$outboundSchema;
  /** @deprecated use `EncodeSmartContractRequest$Outbound` instead. */
  export type Outbound = EncodeSmartContractRequest$Outbound;
}

export function encodeSmartContractRequestToJSON(
  encodeSmartContractRequest: EncodeSmartContractRequest,
): string {
  return JSON.stringify(
    EncodeSmartContractRequest$outboundSchema.parse(encodeSmartContractRequest),
  );
}

export function encodeSmartContractRequestFromJSON(
  jsonString: string,
): SafeParseResult<EncodeSmartContractRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EncodeSmartContractRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EncodeSmartContractRequest' from JSON`,
  );
}

/** @internal */
export const EncodeSmartContractResponse$inboundSchema: z.ZodType<
  EncodeSmartContractResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  EncodeSmartContractResponse: shared.EncodeSmartContractResponse$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "EncodeSmartContractResponse": "encodeSmartContractResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type EncodeSmartContractResponse$Outbound = {
  ContentType: string;
  EncodeSmartContractResponse?:
    | shared.EncodeSmartContractResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const EncodeSmartContractResponse$outboundSchema: z.ZodType<
  EncodeSmartContractResponse$Outbound,
  z.ZodTypeDef,
  EncodeSmartContractResponse
> = z.object({
  contentType: z.string(),
  encodeSmartContractResponse: shared.EncodeSmartContractResponse$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    encodeSmartContractResponse: "EncodeSmartContractResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeSmartContractResponse$ {
  /** @deprecated use `EncodeSmartContractResponse$inboundSchema` instead. */
  export const inboundSchema = EncodeSmartContractResponse$inboundSchema;
  /** @deprecated use `EncodeSmartContractResponse$outboundSchema` instead. */
  export const outboundSchema = EncodeSmartContractResponse$outboundSchema;
  /** @deprecated use `EncodeSmartContractResponse$Outbound` instead. */
  export type Outbound = EncodeSmartContractResponse$Outbound;
}

export function encodeSmartContractResponseToJSON(
  encodeSmartContractResponse: EncodeSmartContractResponse,
): string {
  return JSON.stringify(
    EncodeSmartContractResponse$outboundSchema.parse(
      encodeSmartContractResponse,
    ),
  );
}

export function encodeSmartContractResponseFromJSON(
  jsonString: string,
): SafeParseResult<EncodeSmartContractResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EncodeSmartContractResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EncodeSmartContractResponse' from JSON`,
  );
}
