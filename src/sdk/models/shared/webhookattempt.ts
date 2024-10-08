/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum WebhookAttemptStatus {
  RunningCall = "RUNNING_CALL",
  SuccessfulCall = "SUCCESSFUL_CALL",
  FailedCall = "FAILED_CALL",
}

export type WebhookAttempt = {
  attempt: number;
  attemptDate: string;
  createdAt?: Date | undefined;
  id: string;
  responsePayload: string;
  responseStatusCode: number;
  status: WebhookAttemptStatus;
  updatedAt?: Date | undefined;
  webhookId: string;
};

/** @internal */
export const WebhookAttemptStatus$inboundSchema: z.ZodNativeEnum<
  typeof WebhookAttemptStatus
> = z.nativeEnum(WebhookAttemptStatus);

/** @internal */
export const WebhookAttemptStatus$outboundSchema: z.ZodNativeEnum<
  typeof WebhookAttemptStatus
> = WebhookAttemptStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookAttemptStatus$ {
  /** @deprecated use `WebhookAttemptStatus$inboundSchema` instead. */
  export const inboundSchema = WebhookAttemptStatus$inboundSchema;
  /** @deprecated use `WebhookAttemptStatus$outboundSchema` instead. */
  export const outboundSchema = WebhookAttemptStatus$outboundSchema;
}

/** @internal */
export const WebhookAttempt$inboundSchema: z.ZodType<
  WebhookAttempt,
  z.ZodTypeDef,
  unknown
> = z.object({
  attempt: z.number(),
  attemptDate: z.string(),
  createdAt: z.string().datetime({ offset: true }).default(
    "2024-10-07T18:00:20.012Z",
  ).transform(v => new Date(v)),
  id: z.string(),
  responsePayload: z.string(),
  responseStatusCode: z.number(),
  status: WebhookAttemptStatus$inboundSchema,
  updatedAt: z.string().datetime({ offset: true }).default(
    "2024-10-07T18:00:20.012Z",
  ).transform(v => new Date(v)),
  webhookId: z.string(),
});

/** @internal */
export type WebhookAttempt$Outbound = {
  attempt: number;
  attemptDate: string;
  createdAt: string;
  id: string;
  responsePayload: string;
  responseStatusCode: number;
  status: string;
  updatedAt: string;
  webhookId: string;
};

/** @internal */
export const WebhookAttempt$outboundSchema: z.ZodType<
  WebhookAttempt$Outbound,
  z.ZodTypeDef,
  WebhookAttempt
> = z.object({
  attempt: z.number(),
  attemptDate: z.string(),
  createdAt: z.date().default(() => new Date("2024-10-07T18:00:20.012Z"))
    .transform(v => v.toISOString()),
  id: z.string(),
  responsePayload: z.string(),
  responseStatusCode: z.number(),
  status: WebhookAttemptStatus$outboundSchema,
  updatedAt: z.date().default(() => new Date("2024-10-07T18:00:20.012Z"))
    .transform(v => v.toISOString()),
  webhookId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookAttempt$ {
  /** @deprecated use `WebhookAttempt$inboundSchema` instead. */
  export const inboundSchema = WebhookAttempt$inboundSchema;
  /** @deprecated use `WebhookAttempt$outboundSchema` instead. */
  export const outboundSchema = WebhookAttempt$outboundSchema;
  /** @deprecated use `WebhookAttempt$Outbound` instead. */
  export type Outbound = WebhookAttempt$Outbound;
}
