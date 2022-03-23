const size = {
  xs: '320px',
  sm: '375px',
  tablet: '768px',
  large: '1024px',
  xl: '1440px',
}

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.tablet})`,
  lg: `(min-width: ${size.large})`,
  xl: `(min-width: ${size.xl})`,
}
