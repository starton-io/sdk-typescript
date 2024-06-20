/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotCancelWebhook, CouldNotCancelWebhook$ } from "./couldnotcancelwebhook.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type CancelWebhookWebhookResponseResponseBody = CouldNotCancelWebhook;

export type CancelWebhookWebhookResponseBody = CouldNotFindResource;

export type CancelWebhookResponseBody = BadRequestException;

/** @internal */
export namespace CancelWebhookWebhookResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        CancelWebhookWebhookResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotCancelWebhook$.inboundSchema;

    export type Outbound = CouldNotCancelWebhook$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CancelWebhookWebhookResponseResponseBody
    > = CouldNotCancelWebhook$.outboundSchema;
}

/** @internal */
export namespace CancelWebhookWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<CancelWebhookWebhookResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CancelWebhookWebhookResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace CancelWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<CancelWebhookResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelWebhookResponseBody> =
        BadRequestException$.outboundSchema;
}
