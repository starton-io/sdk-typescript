/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CouldNotAssignNonce, CouldNotAssignNonce$ } from "./couldnotassignnonce.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import { CouldNotProcessEntity, CouldNotProcessEntity$ } from "./couldnotprocessentity.js";
import * as z from "zod";

export type ResyncNoncesWalletWalletTransactionManagerResponseResponseBody = CouldNotAssignNonce;

export type ResyncNoncesWalletWalletTransactionManagerResponseBody = CouldNotProcessEntity;

export type ResyncNoncesWalletWalletResponseBody = CouldNotFindResource;

export type ResyncNoncesWalletResponseBody = BadRequestException;

/** @internal */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletTransactionManagerResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotAssignNonce$.inboundSchema;

    export type Outbound = CouldNotAssignNonce$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletTransactionManagerResponseResponseBody
    > = CouldNotAssignNonce$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseBody$ {
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletTransactionManagerResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotProcessEntity$.inboundSchema;

    export type Outbound = CouldNotProcessEntity$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletTransactionManagerResponseBody
    > = CouldNotProcessEntity$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletWalletResponseBody$ {
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletResponseBody$ {
    export const inboundSchema: z.ZodType<ResyncNoncesWalletResponseBody, z.ZodTypeDef, unknown> =
        BadRequestException$.inboundSchema;

    export type Outbound = BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResyncNoncesWalletResponseBody> =
        BadRequestException$.outboundSchema;
}
