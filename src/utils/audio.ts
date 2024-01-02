export const play = (src?: string) => {
    const audio = new Audio(src)
    audio.muted = true
    audio.play()
    // audio.muted = false
}
