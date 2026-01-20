
/**
 * Optimizes Cloudinary image URLs by injecting automatic format and quality parameters.
 * Returns the original URL if it's not a Cloudinary URL.
 * 
 * @param url - The original image URL
 * @param width - Optional width to resize the image to (e.g. for thumbnails)
 */
export const getOptimizedImage = (url: string, width?: number): string => {
    if (!url) return '';

    // Check if it's a Cloudinary URL
    if (!url.includes('cloudinary.com')) {
        return url;
    }

    // If already optimized, don't do it again (basic check)
    if (url.includes('f_auto,q_auto')) {
        return url;
    }

    // Insert transformations after /upload/
    // Example: .../upload/v123... -> .../upload/f_auto,q_auto/v123...
    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) return url;

    const prefix = url.substring(0, uploadIndex + 8); // include '/upload/'
    const suffix = url.substring(uploadIndex + 8);

    let transformations = 'f_auto,q_auto';

    if (width) {
        transformations += `,w_${width}`;
    }

    return `${prefix}${transformations}/${suffix}`;
};
