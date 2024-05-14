/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemasDATABASEDUPLICATEContext = {};

export type DatabaseDuplicateData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasDATABASEDUPLICATEContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class DatabaseDuplicate extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasDATABASEDUPLICATEContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: DatabaseDuplicateData;

    constructor(err: DatabaseDuplicateData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.context != null) {
            this.context = err.context;
        }
        this.errorCode = err.errorCode;
        this.path = err.path;
        this.statusCode = err.statusCode;
        this.timestamp = err.timestamp;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "DatabaseDuplicate";
    }
}

/** @internal */
export namespace SchemasDATABASEDUPLICATEContext$ {
    export const inboundSchema: z.ZodType<SchemasDATABASEDUPLICATEContext, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasDATABASEDUPLICATEContext
    > = z.object({});
}

/** @internal */
export namespace DatabaseDuplicate$ {
    export const inboundSchema: z.ZodType<DatabaseDuplicate, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasDATABASEDUPLICATEContext$.inboundSchema).optional(),
            errorCode: z.string().default("DATABASE_DUPLICATE"),
            message: z
                .string()
                .default("Duplicate conflict when saving this entity to the datbase."),
            path: z.string(),
            statusCode: z.number().default(409),
            timestamp: z.string(),
        })
        .transform((v) => {
            return new DatabaseDuplicate({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.context === undefined ? null : { context: v.context }),
                errorCode: v.errorCode,
                message: v.message,
                path: v.path,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            });
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        context?: SchemasDATABASEDUPLICATEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DatabaseDuplicate> = z
        .instanceof(DatabaseDuplicate)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    context: z
                        .lazy(() => SchemasDATABASEDUPLICATEContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("DATABASE_DUPLICATE"),
                    message: z
                        .string()
                        .default("Duplicate conflict when saving this entity to the datbase."),
                    path: z.string(),
                    statusCode: z.number().default(409),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.context === undefined ? null : { context: v.context }),
                        errorCode: v.errorCode,
                        message: v.message,
                        path: v.path,
                        statusCode: v.statusCode,
                        timestamp: v.timestamp,
                    };
                })
        );
}
