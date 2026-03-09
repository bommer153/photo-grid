import { Image } from "@heroui/react";

interface PhotoGridProps {
  images: string[];
}

export const PhotoGrid = ({ images }: PhotoGridProps) => {
  const visibleImages = images.slice(0, 5);
  const remaining = images.length - 5;

  if (visibleImages.length === 0) return null;

  return (
    <div className="w-full overflow-hidden rounded-lg">
      {/* Top Row - 2 images */}
      <div className="flex gap-0.5 mb-0.5">
        {visibleImages.slice(0, 2).map((src, i) => (
          <div key={i} className="relative flex-1 h-64 overflow-hidden">
            <Image
              src={src}
              alt={`photo-${i}`}
              className="w-full h-full object-cover rounded-none"
              removeWrapper
            />
          </div>
        ))}
      </div>

      {/* Bottom Row - 3 images */}
      {visibleImages.length > 2 && (
        <div className="flex gap-0.5">
          {visibleImages.slice(2, 5).map((src, i) => (
            <div key={i} className="relative flex-1 h-48 overflow-hidden">
              <Image
                src={src}
                alt={`photo-${i + 2}`}
                className="w-full h-full object-cover rounded-none"
                removeWrapper
              />
              {/* Overlay for remaining count on last image */}
              {i === 2 && remaining > 0 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    +{remaining}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};