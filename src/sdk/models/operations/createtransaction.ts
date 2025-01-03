/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateTransactionRequest = {
  /**
   * Transaction payload
   */
  createTransactionDto: shared.CreateTransactionDto;
  /**
   * Boolean for transaction simulation. Will estimate gas price.
   */
  simulate?: boolean | undefined;
};

export type CreateTransactionResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  transaction?: shared.Transaction | undefined;
};

/** @internal */
export const CreateTransactionRequest$inboundSchema: z.ZodType<
  CreateTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CreateTransactionDto: shared.CreateTransactionDto$inboundSchema,
  simulate: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "CreateTransactionDto": "createTransactionDto",
  });
});

/** @internal */
export type CreateTransactionRequest$Outbound = {
  CreateTransactionDto: shared.CreateTransactionDto$Outbound;
  simulate?: boolean | undefined;
};

/** @internal */
export const CreateTransactionRequest$outboundSchema: z.ZodType<
  CreateTransactionRequest$Outbound,
  z.ZodTypeDef,
  CreateTransactionRequest
> = z.object({
  createTransactionDto: shared.CreateTransactionDto$outboundSchema,
  simulate: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    createTransactionDto: "CreateTransactionDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionRequest$ {
  /** @deprecated use `CreateTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTransactionRequest$inboundSchema;
  /** @deprecated use `CreateTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTransactionRequest$outboundSchema;
  /** @deprecated use `CreateTransactionRequest$Outbound` instead. */
  export type Outbound = CreateTransactionRequest$Outbound;
}

export function createTransactionRequestToJSON(
  createTransactionRequest: CreateTransactionRequest,
): string {
  return JSON.stringify(
    CreateTransactionRequest$outboundSchema.parse(createTransactionRequest),
  );
}

export function createTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionRequest' from JSON`,
  );
}

/** @internal */
export const CreateTransactionResponse$inboundSchema: z.ZodType<
  CreateTransactionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Transaction: shared.Transaction$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Transaction": "transaction",
  });
});

/** @internal */
export type CreateTransactionResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Transaction?: shared.Transaction$Outbound | undefined;
};

/** @internal */
export const CreateTransactionResponse$outboundSchema: z.ZodType<
  CreateTransactionResponse$Outbound,
  z.ZodTypeDef,
  CreateTransactionResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  transaction: shared.Transaction$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    transaction: "Transaction",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionResponse$ {
  /** @deprecated use `CreateTransactionResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTransactionResponse$inboundSchema;
  /** @deprecated use `CreateTransactionResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTransactionResponse$outboundSchema;
  /** @deprecated use `CreateTransactionResponse$Outbound` instead. */
  export type Outbound = CreateTransactionResponse$Outbound;
}

export function createTransactionResponseToJSON(
  createTransactionResponse: CreateTransactionResponse,
): string {
  return JSON.stringify(
    CreateTransactionResponse$outboundSchema.parse(createTransactionResponse),
  );
}

export function createTransactionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransactionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransactionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionResponse' from JSON`,
  );
}
