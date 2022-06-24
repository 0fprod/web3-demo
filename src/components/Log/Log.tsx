import { useContext } from "react"
import { LogContext } from "../../context/Log.context"
import { StyledLog } from "./Log.styled"


export const Log: React.FC = () => {
    const logContext = useContext(LogContext)

    return <StyledLog>
        {
            logContext && logContext.logs.map(msg => <div key={msg} role="log"> {msg}</div>)
        }
    </StyledLog>
}