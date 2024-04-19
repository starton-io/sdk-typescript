/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotAssignNonce, CouldNotAssignNonce$ } from "./couldnotassignnonce";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import { CouldNotProcessEntity, CouldNotProcessEntity$ } from "./couldnotprocessentity";
import * as z from "zod";

export type ResyncNoncesWalletWalletTransactionManagerResponseResponseBody = CouldNotAssignNonce;

export type ResyncNoncesWalletWalletTransactionManagerResponseBody = CouldNotProcessEntity;

export type ResyncNoncesWalletWalletResponseBody = CouldNotFindResource;

export type ResyncNoncesWalletResponseBody = BadRequestException;

/** @internal */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$ {
    export type Inbound = CouldNotAssignNonce$.Inbound;

    export type Outbound = CouldNotAssignNonce$.Outbound;
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletTransactionManagerResponseResponseBody,
        z.ZodTypeDef,
        Inbound
    > = CouldNotAssignNonce$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletTransactionManagerResponseResponseBody
    > = CouldNotAssignNonce$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletWalletTransactionManagerResponseBody$ {
    export type Inbound = CouldNotProcessEntity$.Inbound;

    export type Outbound = CouldNotProcessEntity$.Outbound;
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletTransactionManagerResponseBody,
        z.ZodTypeDef,
        Inbound
    > = CouldNotProcessEntity$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletTransactionManagerResponseBody
    > = CouldNotProcessEntity$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletWalletResponseBody$ {
    export type Inbound = CouldNotFindResource$.Inbound;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const inboundSchema: z.ZodType<
        ResyncNoncesWalletWalletResponseBody,
        z.ZodTypeDef,
        Inbound
    > = CouldNotFindResource$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ResyncNoncesWalletWalletResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace ResyncNoncesWalletResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<ResyncNoncesWalletResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResyncNoncesWalletResponseBody> =
        BadRequestException$.outboundSchema;
}
