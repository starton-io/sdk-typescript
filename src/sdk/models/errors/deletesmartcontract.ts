/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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

export type DeleteSmartContractSmartContractManagementResponseBody =
  CouldNotFindResource;

export type DeleteSmartContractResponseBody = BadRequestException;

/** @internal */
export const DeleteSmartContractSmartContractManagementResponseBody$inboundSchema:
  z.ZodType<
    DeleteSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeleteSmartContractSmartContractManagementResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const DeleteSmartContractSmartContractManagementResponseBody$outboundSchema:
  z.ZodType<
    DeleteSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteSmartContractSmartContractManagementResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSmartContractSmartContractManagementResponseBody$ {
  /** @deprecated use `DeleteSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteSmartContractSmartContractManagementResponseBody$inboundSchema;
  /** @deprecated use `DeleteSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteSmartContractSmartContractManagementResponseBody$outboundSchema;
  /** @deprecated use `DeleteSmartContractSmartContractManagementResponseBody$Outbound` instead. */
  export type Outbound =
    DeleteSmartContractSmartContractManagementResponseBody$Outbound;
}

/** @internal */
export const DeleteSmartContractResponseBody$inboundSchema: z.ZodType<
  DeleteSmartContractResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type DeleteSmartContractResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const DeleteSmartContractResponseBody$outboundSchema: z.ZodType<
  DeleteSmartContractResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteSmartContractResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSmartContractResponseBody$ {
  /** @deprecated use `DeleteSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteSmartContractResponseBody$inboundSchema;
  /** @deprecated use `DeleteSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteSmartContractResponseBody$outboundSchema;
  /** @deprecated use `DeleteSmartContractResponseBody$Outbound` instead. */
  export type Outbound = DeleteSmartContractResponseBody$Outbound;
}
