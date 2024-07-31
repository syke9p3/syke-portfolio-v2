export const entranceVariants = {
    hidden: { opacity: 0 },
    shown: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
}


export const dominoVariants = {
    hidden: { opacity: 0, y: -50 },
    shown: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5 * index,
        }
    }),
}