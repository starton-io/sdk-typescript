/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import * as z from "zod";

export type GetOneWalletWalletResponseBody = CouldNotFindResource;

export type GetOneWalletResponseBody = BadRequestException;

/** @internal */
export namespace GetOneWalletWalletResponseBody$ {
    export const inboundSchema: z.ZodType<GetOneWalletWalletResponseBody, z.ZodTypeDef, unknown> =
        CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWalletWalletResponseBody> =
        CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace GetOneWalletResponseBody$ {
    export const inboundSchema: z.ZodType<GetOneWalletResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWalletResponseBody> =
        BadRequestException$.outboundSchema;
}
