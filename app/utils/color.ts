const ACCENT = '#3AABDB'

const toRgba = (hex: string, alpha: number) => {
    let c = hex.replace('#', '')
    if (c.length === 3) c = c.split('').map(ch => ch + ch).join('')
    const num = parseInt(c, 16)
    const r = (num >> 16) & 255
    const g = (num >> 8) & 255
    const b = num & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export { ACCENT, toRgba }