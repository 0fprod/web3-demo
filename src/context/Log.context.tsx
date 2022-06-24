import React, { useState } from 'react'

export interface LogContext {
    logs: Array<string>;
    setLogs(log: string): void
}

export const LogContext = React.createContext<LogContext | null>(null)

interface ProviderProps {
    children: React.ReactNode
}

export const LogProvider: React.FC<ProviderProps> = ({ children }) => {
    const [logs, setLogs] = useState<Array<string>>([]);
    const updateLogs = (newLog: string) => {
        const date = new Date().toLocaleTimeString();
        setLogs([...logs, `ℹ️ [LOG: ${date}] ${newLog}`]);
    }

    return <LogContext.Provider value={{
        logs,
        setLogs: updateLogs
    }}>
        {children}
    </LogContext.Provider>
}