import React from 'react'
import SVG from 'react-inlinesvg'
type Props = {
    className?: string
    src: string
    svgClassName?: string
}

const KTSVG: React.FC<Props> = ({ className = '', src, svgClassName = 'mh-50px' }) => {
    return (
        <span className={`svg-icon ${className}`}>
            <SVG src={src} className={svgClassName} />
        </span>
    )
}

export { KTSVG }

