export const cn = (...rest: Array<string | undefined>): string => {
    return rest.map(d => {
        if(d) {
            return d
        }
        return ''
    }).join(' ')
}