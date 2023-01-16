function memoryFormatted(heap) {
    if (heap < 1024) {
        return heap + " bytes";
    }

    if ((1024 <= heap) && (heap < 2 ** 20)) {
        return Math.floor(heap / 1024) + "." + Math.round((heap % 1024) / 1024 * 10) + "KB";
    }

    if ((2 ** 20 <= heap)) {
        return Math.floor(heap / 2 ** 20) + "." + Math.round((heap % 2 ** 20) / 2 ** 20 * 10) + "MB";
    }
}
exports.memoryFormatted = memoryFormatted;
