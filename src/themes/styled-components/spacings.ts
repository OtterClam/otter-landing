type Size = 'sm' | 'md' | 'lg';
export type Spacings = Record<Size, string>
export const spacings: Spacings = {
    sm: '10px',
    md: '20px',
    lg: '40px',
}