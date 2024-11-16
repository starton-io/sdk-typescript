/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ClaimFaucetRequest = {
  requireFaucetDto: shared.RequireFaucetDto;
  /**
   * EVM starton supported network.
   */
  network: string;
};

export type ClaimFaucetResponseBody = shared.TooEarly;

export type ClaimFaucetResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  faucet?: shared.Faucet | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  oneOf?: shared.TooEarly | undefined;
};

/** @internal */
export const ClaimFaucetRequest$inboundSchema: z.ZodType<
  ClaimFaucetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequireFaucetDto: shared.RequireFaucetDto$inboundSchema,
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequireFaucetDto": "requireFaucetDto",
  });
});

/** @internal */
export type ClaimFaucetRequest$Outbound = {
  RequireFaucetDto: shared.RequireFaucetDto$Outbound;
  network: string;
};

/** @internal */
export const ClaimFaucetRequest$outboundSchema: z.ZodType<
  ClaimFaucetRequest$Outbound,
  z.ZodTypeDef,
  ClaimFaucetRequest
> = z.object({
  requireFaucetDto: shared.RequireFaucetDto$outboundSchema,
  network: z.string(),
}).transform((v) => {
  return remap$(v, {
    requireFaucetDto: "RequireFaucetDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClaimFaucetRequest$ {
  /** @deprecated use `ClaimFaucetRequest$inboundSchema` instead. */
  export const inboundSchema = ClaimFaucetRequest$inboundSchema;
  /** @deprecated use `ClaimFaucetRequest$outboundSchema` instead. */
  export const outboundSchema = ClaimFaucetRequest$outboundSchema;
  /** @deprecated use `ClaimFaucetRequest$Outbound` instead. */
  export type Outbound = ClaimFaucetRequest$Outbound;
}

export function claimFaucetRequestToJSON(
  claimFaucetRequest: ClaimFaucetRequest,
): string {
  return JSON.stringify(
    ClaimFaucetRequest$outboundSchema.parse(claimFaucetRequest),
  );
}

export function claimFaucetRequestFromJSON(
  jsonString: string,
): SafeParseResult<ClaimFaucetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClaimFaucetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClaimFaucetRequest' from JSON`,
  );
}

/** @internal */
export const ClaimFaucetResponseBody$inboundSchema: z.ZodType<
  ClaimFaucetResponseBody,
  z.ZodTypeDef,
  unknown
> = shared.TooEarly$inboundSchema;

/** @internal */
export type ClaimFaucetResponseBody$Outbound = shared.TooEarly$Outbound;

/** @internal */
export const ClaimFaucetResponseBody$outboundSchema: z.ZodType<
  ClaimFaucetResponseBody$Outbound,
  z.ZodTypeDef,
  ClaimFaucetResponseBody
> = shared.TooEarly$outboundSchema;

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

export function claimFaucetResponseBodyToJSON(
  claimFaucetResponseBody: ClaimFaucetResponseBody,
): string {
  return JSON.stringify(
    ClaimFaucetResponseBody$outboundSchema.parse(claimFaucetResponseBody),
  );
}

export function claimFaucetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ClaimFaucetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClaimFaucetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClaimFaucetResponseBody' from JSON`,
  );
}

/** @internal */
export const ClaimFaucetResponse$inboundSchema: z.ZodType<
  ClaimFaucetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Faucet: shared.Faucet$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  oneOf: shared.TooEarly$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Faucet": "faucet",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ClaimFaucetResponse$Outbound = {
  ContentType: string;
  Faucet?: shared.Faucet$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
  oneOf?: shared.TooEarly$Outbound | undefined;
};

/** @internal */
export const ClaimFaucetResponse$outboundSchema: z.ZodType<
  ClaimFaucetResponse$Outbound,
  z.ZodTypeDef,
  ClaimFaucetResponse
> = z.object({
  contentType: z.string(),
  faucet: shared.Faucet$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  oneOf: shared.TooEarly$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    faucet: "Faucet",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClaimFaucetResponse$ {
  /** @deprecated use `ClaimFaucetResponse$inboundSchema` instead. */
  export const inboundSchema = ClaimFaucetResponse$inboundSchema;
  /** @deprecated use `ClaimFaucetResponse$outboundSchema` instead. */
  export const outboundSchema = ClaimFaucetResponse$outboundSchema;
  /** @deprecated use `ClaimFaucetResponse$Outbound` instead. */
  export type Outbound = ClaimFaucetResponse$Outbound;
}

export function claimFaucetResponseToJSON(
  claimFaucetResponse: ClaimFaucetResponse,
): string {
  return JSON.stringify(
    ClaimFaucetResponse$outboundSchema.parse(claimFaucetResponse),
  );
}

export function claimFaucetResponseFromJSON(
  jsonString: string,
): SafeParseResult<ClaimFaucetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClaimFaucetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClaimFaucetResponse' from JSON`,
  );
}
