
export const images: string[] = ['/sd-011223-1.png' ,'/1.png', '/2.png']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
