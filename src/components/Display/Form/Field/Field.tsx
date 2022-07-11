import React from "react";
import { FieldWrapper, StyledStrong } from "./Field.styled";

interface Props {
    label: string;
    children: React.ReactNode
}
export const Field: React.FC<Props> = ({ label, children }: Props) => {
    return <FieldWrapper>
        <StyledStrong>{label}:</StyledStrong><em>{children}</em>
    </FieldWrapper>
}