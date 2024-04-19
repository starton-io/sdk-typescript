/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource";
import * as z from "zod";

export type UpdateSmartContractSmartContractManagementResponseBody = CouldNotFindResource;

export type UpdateSmartContractResponseBody = BadRequestException;

/** @internal */
export namespace UpdateSmartContractSmartContractManagementResponseBody$ {
    export type Inbound = CouldNotFindResource$.Inbound;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const inboundSchema: z.ZodType<
        UpdateSmartContractSmartContractManagementResponseBody,
        z.ZodTypeDef,
        Inbound
    > = CouldNotFindResource$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateSmartContractSmartContractManagementResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace UpdateSmartContractResponseBody$ {
    export type Inbound = BadRequestException$.Inbound;

    export type Outbound = BadRequestException$.Outbound;
    export const inboundSchema: z.ZodType<UpdateSmartContractResponseBody, z.ZodTypeDef, Inbound> =
        BadRequestException$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateSmartContractResponseBody
    > = BadRequestException$.outboundSchema;
}
