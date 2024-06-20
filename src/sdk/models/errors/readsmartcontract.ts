/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CallException, CallException$ } from "./callexception.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import { EnsNotSupported, EnsNotSupported$ } from "./ensnotsupported.js";
import { ExecutionWillFail, ExecutionWillFail$ } from "./executionwillfail.js";
import { InvalidAbi, InvalidAbi$ } from "./invalidabi.js";
import { InvalidArgument, InvalidArgument$ } from "./invalidargument.js";
import { InvalidBytecode, InvalidBytecode$ } from "./invalidbytecode.js";
import { InvalidFunction, InvalidFunction$ } from "./invalidfunction.js";
import { MissingArgument, MissingArgument$ } from "./missingargument.js";
import { NumericFault, NumericFault$ } from "./numericfault.js";
import { UnexpectedArgument, UnexpectedArgument$ } from "./unexpectedargument.js";
import { Unknown, Unknown$ } from "./unknown.js";
import * as z from "zod";

export type ReadSmartContractSmartContractManagementResponseResponseBody = Unknown;

export type ReadSmartContractSmartContractManagementResponseBody = CouldNotFindResource;

export type ReadSmartContractResponseBody =
    | InvalidBytecode
    | InvalidAbi
    | InvalidFunction
    | MissingArgument
    | UnexpectedArgument
    | InvalidArgument
    | CallException
    | NumericFault
    | ExecutionWillFail
    | EnsNotSupported
    | BadRequestException;

/** @internal */
export namespace ReadSmartContractSmartContractManagementResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        ReadSmartContractSmartContractManagementResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = Unknown$.inboundSchema;

    export type Outbound = Unknown$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReadSmartContractSmartContractManagementResponseResponseBody
    > = Unknown$.outboundSchema;
}

/** @internal */
export namespace ReadSmartContractSmartContractManagementResponseBody$ {
    export const inboundSchema: z.ZodType<
        ReadSmartContractSmartContractManagementResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReadSmartContractSmartContractManagementResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace ReadSmartContractResponseBody$ {
    export const inboundSchema: z.ZodType<ReadSmartContractResponseBody, z.ZodTypeDef, unknown> =
        z.union([
            InvalidBytecode$.inboundSchema,
            InvalidAbi$.inboundSchema,
            InvalidFunction$.inboundSchema,
            MissingArgument$.inboundSchema,
            UnexpectedArgument$.inboundSchema,
            InvalidArgument$.inboundSchema,
            CallException$.inboundSchema,
            NumericFault$.inboundSchema,
            ExecutionWillFail$.inboundSchema,
            EnsNotSupported$.inboundSchema,
            BadRequestException$.inboundSchema,
        ]);

    export type Outbound =
        | InvalidBytecode$.Outbound
        | InvalidAbi$.Outbound
        | InvalidFunction$.Outbound
        | MissingArgument$.Outbound
        | UnexpectedArgument$.Outbound
        | InvalidArgument$.Outbound
        | CallException$.Outbound
        | NumericFault$.Outbound
        | ExecutionWillFail$.Outbound
        | EnsNotSupported$.Outbound
        | BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponseBody> =
        z.union([
            InvalidBytecode$.outboundSchema,
            InvalidAbi$.outboundSchema,
            InvalidFunction$.outboundSchema,
            MissingArgument$.outboundSchema,
            UnexpectedArgument$.outboundSchema,
            InvalidArgument$.outboundSchema,
            CallException$.outboundSchema,
            NumericFault$.outboundSchema,
            ExecutionWillFail$.outboundSchema,
            EnsNotSupported$.outboundSchema,
            BadRequestException$.outboundSchema,
        ]);
}
