/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum InvitationRole {
    Owner = "owner",
}

export type Invitation = {
    createdAt?: Date | undefined;
    email: string;
    id: string;
    projectId: string;
    role: InvitationRole;
    updatedAt?: Date | undefined;
};

/** @internal */
export const InvitationRole$ = z.nativeEnum(InvitationRole);

/** @internal */
export namespace Invitation$ {
    export type Inbound = {
        createdAt?: string | undefined;
        email: string;
        id: string;
        projectId: string;
        role: InvitationRole;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Invitation, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.312Z")
                .transform((v) => new Date(v)),
            email: z.string(),
            id: z.string(),
            projectId: z.string(),
            role: InvitationRole$,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T16:52:29.312Z")
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                email: v.email,
                id: v.id,
                projectId: v.projectId,
                role: v.role,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        createdAt: string;
        email: string;
        id: string;
        projectId: string;
        role: InvitationRole;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Invitation> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.312Z"))
                .transform((v) => v.toISOString()),
            email: z.string(),
            id: z.string(),
            projectId: z.string(),
            role: InvitationRole$,
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-24T16:52:29.312Z"))
                .transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                email: v.email,
                id: v.id,
                projectId: v.projectId,
                role: v.role,
                updatedAt: v.updatedAt,
            };
        });
}
