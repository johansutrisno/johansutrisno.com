import Image, { ImageProps } from "next/image";

interface ResponsiveImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  isPriority?: boolean;
}

/**
 * [LCP] [CLS] Optimal Image component based on Core Web Vitals best practices.
 */
export const ResponsiveImage = ({
  alt,
  isPriority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: ResponsiveImageProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-2 aspect-video">
      <Image
        alt={alt}
        priority={isPriority}
        loading={isPriority ? "eager" : "lazy"}
        sizes={sizes}
        className="object-cover transition-opacity duration-300"
        {...props}
      />
    </div>
  );
};

// Usage Example for Profile Photo (Above the fold):
// <ResponsiveImage 
//   src="/profile.jpg" 
//   alt="Johan Sutrisno" 
//   isPriority={true} 
//   width={400} 
//   height={400} 
// />

// Usage Example for Project Thumbnail (Below the fold):
// <ResponsiveImage 
//   src="/project-1.jpg" 
//   alt="Project Screenshot" 
//   placeholder="blur" 
//   blurDataURL="..." 
//   fill
// />
