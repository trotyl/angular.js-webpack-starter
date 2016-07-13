export const CheckmarkFilterName = 'checkmark'

export type CheckmarkFilter = (input: boolean) => string

export function CheckmarkFilterFactory (): CheckmarkFilter {
    return (input: boolean) => {
        return input ? '\u2713' : '\u2718'
    }
}
