export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const requiredTextarea = value => (value || typeof value === 'number' ? undefined : ' ')

export const maxLength = max => value => (value.length <= max ? undefined : `max length ${max} symbols`)