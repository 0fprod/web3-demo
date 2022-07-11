import { StyledButton } from "../Display.styled"
import { Field } from "./Field/Field"
import { StyledForm, StyledTextField } from "./Form.styled"

export const Form: React.FC = () => {
    return <StyledForm>
        <StyledButton> Disconnect </StyledButton>
        <Field label="Account address">
            0xffb1...efd0
        </Field>
        <Field label="Account balance">
            16.37 ETH
        </Field>
        <Field label="Donate to">
            <StyledTextField />
        </Field>
        <div>
            <StyledButton> Send </StyledButton>
        </div>
    </StyledForm>
}