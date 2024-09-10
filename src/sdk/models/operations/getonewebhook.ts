/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetOneWebhookRequest = {
  /**
   * The unique identifier of the target webhook.
   */
  id: string;
};

export type GetOneWebhookResponse = {
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
  webhook?: shared.Webhook | undefined;
};

/** @internal */
export const GetOneWebhookRequest$inboundSchema: z.ZodType<
  GetOneWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetOneWebhookRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetOneWebhookRequest$outboundSchema: z.ZodType<
  GetOneWebhookRequest$Outbound,
  z.ZodTypeDef,
  GetOneWebhookRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWebhookRequest$ {
  /** @deprecated use `GetOneWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = GetOneWebhookRequest$inboundSchema;
  /** @deprecated use `GetOneWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = GetOneWebhookRequest$outboundSchema;
  /** @deprecated use `GetOneWebhookRequest$Outbound` instead. */
  export type Outbound = GetOneWebhookRequest$Outbound;
}

/** @internal */
export const GetOneWebhookResponse$inboundSchema: z.ZodType<
  GetOneWebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Webhook: shared.Webhook$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Webhook": "webhook",
  });
});

/** @internal */
export type GetOneWebhookResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Webhook?: shared.Webhook$Outbound | undefined;
};

/** @internal */
export const GetOneWebhookResponse$outboundSchema: z.ZodType<
  GetOneWebhookResponse$Outbound,
  z.ZodTypeDef,
  GetOneWebhookResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  webhook: shared.Webhook$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    webhook: "Webhook",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWebhookResponse$ {
  /** @deprecated use `GetOneWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = GetOneWebhookResponse$inboundSchema;
  /** @deprecated use `GetOneWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = GetOneWebhookResponse$outboundSchema;
  /** @deprecated use `GetOneWebhookResponse$Outbound` instead. */
  export type Outbound = GetOneWebhookResponse$Outbound;
}
