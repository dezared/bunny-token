interface IconProps {
  className: string
  iconGlyph: string
}

const Icon: React.FC<IconProps> = ({ iconGlyph, className }) => {
  const classNameBase = className + ' icon after:font-fw'
  return <span className={classNameBase} data-attrIcon={iconGlyph} />
}

const IconBrand: React.FC<IconProps> = ({ iconGlyph, className }) => {
  const classNameBase = className + ' icon after:font-fwb'
  return <span className={classNameBase} data-attrIcon={iconGlyph} />
}

export { Icon, IconBrand }
