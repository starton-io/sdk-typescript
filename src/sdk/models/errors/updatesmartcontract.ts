/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
    CouldNotFindResource,
    CouldNotFindResource$inboundSchema,
    CouldNotFindResource$Outbound,
    CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import * as z from "zod";

export type UpdateSmartContractSmartContractManagementResponseBody = CouldNotFindResource;

export type UpdateSmartContractResponseBody = BadRequestException;

/** @internal */
export const UpdateSmartContractSmartContractManagementResponseBody$inboundSchema: z.ZodType<
    UpdateSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type UpdateSmartContractSmartContractManagementResponseBody$Outbound =
    CouldNotFindResource$Outbound;

/** @internal */
export const UpdateSmartContractSmartContractManagementResponseBody$outboundSchema: z.ZodType<
    UpdateSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateSmartContractSmartContractManagementResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractSmartContractManagementResponseBody$ {
    /** @deprecated use `UpdateSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        UpdateSmartContractSmartContractManagementResponseBody$inboundSchema;
    /** @deprecated use `UpdateSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        UpdateSmartContractSmartContractManagementResponseBody$outboundSchema;
    /** @deprecated use `UpdateSmartContractSmartContractManagementResponseBody$Outbound` instead. */
    export type Outbound = UpdateSmartContractSmartContractManagementResponseBody$Outbound;
}

/** @internal */
export const UpdateSmartContractResponseBody$inboundSchema: z.ZodType<
    UpdateSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type UpdateSmartContractResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const UpdateSmartContractResponseBody$outboundSchema: z.ZodType<
    UpdateSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateSmartContractResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractResponseBody$ {
    /** @deprecated use `UpdateSmartContractResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateSmartContractResponseBody$inboundSchema;
    /** @deprecated use `UpdateSmartContractResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateSmartContractResponseBody$outboundSchema;
    /** @deprecated use `UpdateSmartContractResponseBody$Outbound` instead. */
    export type Outbound = UpdateSmartContractResponseBody$Outbound;
}
