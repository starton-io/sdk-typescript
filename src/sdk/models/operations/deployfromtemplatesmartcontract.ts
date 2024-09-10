/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type DeployFromTemplateSmartContractRequest = {
  /**
   * Deploy smart contract from template body payload.
   */
  deployFromTemplateDto: shared.DeployFromTemplateDto;
  /**
   * Boolean for transaction simulation. Will estimate gas price.
   */
  simulate?: boolean | undefined;
};

export type DeployFromTemplateSmartContractResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  deploySmartContractResponse?: shared.DeploySmartContractResponse | undefined;
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
export const DeployFromTemplateSmartContractRequest$inboundSchema: z.ZodType<
  DeployFromTemplateSmartContractRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  DeployFromTemplateDto: shared.DeployFromTemplateDto$inboundSchema,
  simulate: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "DeployFromTemplateDto": "deployFromTemplateDto",
  });
});

/** @internal */
export type DeployFromTemplateSmartContractRequest$Outbound = {
  DeployFromTemplateDto: shared.DeployFromTemplateDto$Outbound;
  simulate?: boolean | undefined;
};

/** @internal */
export const DeployFromTemplateSmartContractRequest$outboundSchema: z.ZodType<
  DeployFromTemplateSmartContractRequest$Outbound,
  z.ZodTypeDef,
  DeployFromTemplateSmartContractRequest
> = z.object({
  deployFromTemplateDto: shared.DeployFromTemplateDto$outboundSchema,
  simulate: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    deployFromTemplateDto: "DeployFromTemplateDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromTemplateSmartContractRequest$ {
  /** @deprecated use `DeployFromTemplateSmartContractRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeployFromTemplateSmartContractRequest$inboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeployFromTemplateSmartContractRequest$outboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractRequest$Outbound` instead. */
  export type Outbound = DeployFromTemplateSmartContractRequest$Outbound;
}

/** @internal */
export const DeployFromTemplateSmartContractResponse$inboundSchema: z.ZodType<
  DeployFromTemplateSmartContractResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  DeploySmartContractResponse: shared.DeploySmartContractResponse$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "DeploySmartContractResponse": "deploySmartContractResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeployFromTemplateSmartContractResponse$Outbound = {
  ContentType: string;
  DeploySmartContractResponse?:
    | shared.DeploySmartContractResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeployFromTemplateSmartContractResponse$outboundSchema: z.ZodType<
  DeployFromTemplateSmartContractResponse$Outbound,
  z.ZodTypeDef,
  DeployFromTemplateSmartContractResponse
> = z.object({
  contentType: z.string(),
  deploySmartContractResponse: shared.DeploySmartContractResponse$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    deploySmartContractResponse: "DeploySmartContractResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromTemplateSmartContractResponse$ {
  /** @deprecated use `DeployFromTemplateSmartContractResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeployFromTemplateSmartContractResponse$inboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeployFromTemplateSmartContractResponse$outboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractResponse$Outbound` instead. */
  export type Outbound = DeployFromTemplateSmartContractResponse$Outbound;
}
