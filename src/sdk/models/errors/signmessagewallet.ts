/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type SignMessageWalletWalletResponseBody = CouldNotFindResource;

export type SignMessageWalletResponseBody = BadRequestException;

/** @internal */
export namespace SignMessageWalletWalletResponseBody$ {
    export const inboundSchema: z.ZodType<
        SignMessageWalletWalletResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SignMessageWalletWalletResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace SignMessageWalletResponseBody$ {
    export const inboundSchema: z.ZodType<SignMessageWalletResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SignMessageWalletResponseBody> =
        BadRequestException$.outboundSchema;
}
