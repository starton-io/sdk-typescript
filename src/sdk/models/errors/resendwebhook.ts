/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import { CouldNotResendWebhook, CouldNotResendWebhook$ } from "./couldnotresendwebhook.js";
import * as z from "zod";

export type ResendWebhookWebhookResponseResponseBody = CouldNotResendWebhook;

export type ResendWebhookWebhookResponseBody = CouldNotFindResource;

export type ResendWebhookResponseBody = BadRequestException;

/** @internal */
export namespace ResendWebhookWebhookResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        ResendWebhookWebhookResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotResendWebhook$.inboundSchema;

    export type Outbound = CouldNotResendWebhook$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResendWebhookWebhookResponseResponseBody
    > = CouldNotResendWebhook$.outboundSchema;
}

/** @internal */
export namespace ResendWebhookWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<ResendWebhookWebhookResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResendWebhookWebhookResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace ResendWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<ResendWebhookResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResendWebhookResponseBody> =
        BadRequestException$.outboundSchema;
}
