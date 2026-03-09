import { useState } from "react";
import { Modal, ModalContent, Button } from "@heroui/react";

interface PhotoGridProps {
  images: string[];
}

export const PhotoGrid = ({ images }: PhotoGridProps) => {
  const visibleImages = images.slice(0, 5);
  const remaining = images.length - 5;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (visibleImages.length === 0) return null;

  return (
    <>
      {/* ───── Grid ───── */}
      <div className="w-full overflow-hidden rounded-lg flex flex-col gap-0.5">

        {/* Top Row — 2 images */}
        <div className="flex gap-0.5">
          {visibleImages.slice(0, 2).map((src, i) => (
            <div
              key={i}
              onClick={() => openModal(i)}
              className="relative flex-1 overflow-hidden cursor-pointer
                         h-40 sm:h-52 md:h-64
                         hover:brightness-90 transition-all"
            >
              <img
                src={src}
                alt={`photo-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row — 3 images */}
        {visibleImages.length > 2 && (
          <div className="flex gap-0.5">
            {visibleImages.slice(2, 5).map((src, i) => (
              <div
                key={i}
                onClick={() => openModal(i + 2)}
                className="relative flex-1 overflow-hidden cursor-pointer
                           h-28 sm:h-36 md:h-48
                           hover:brightness-90 transition-all"
              >
                <img
                  src={src}
                  alt={`photo-${i + 2}`}
                  className="w-full h-full object-cover"
                />
                {/* +N overlay on last visible image */}
                {i === 2 && remaining > 0 && (
                  <div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <span className="text-white text-2xl sm:text-3xl font-bold">
                      +{remaining}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ───── Lightbox Modal ───── */}
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="full"
        hideCloseButton
        classNames={{
          base: "bg-black/90 !rounded-none",
          wrapper: "!items-center !justify-center",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="relative flex items-center justify-center w-full h-full min-h-screen p-4">

              {/* Close button */}
              <Button
                onPress={onClose}
                className="absolute top-4 right-4 z-50 text-white bg-black/50
                           rounded-full w-10 h-10 flex items-center justify-center
                           hover:bg-black/80 transition text-xl"
              >
                ✕
              </Button>

              {/* Image counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50
                              text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                {activeIndex + 1} / {images.length}
              </div>

              {/* Prev button */}
              <Button
                onPress={prev}
                className="absolute left-2 sm:left-6 z-50 text-white bg-black/50
                           rounded-full w-10 h-10 flex items-center justify-center
                           hover:bg-black/80 transition text-xl"
              >
                ‹
              </Button>

              {/* Active image */}
              <img
                src={images[activeIndex]}
                alt={`photo-${activeIndex}`}
                className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg
                           select-none"
              />

              {/* Next button */}
              <Button
                onPress={next}
                className="absolute right-2 sm:right-6 z-50 text-white bg-black/50
                           rounded-full w-10 h-10 flex items-center justify-center
                           hover:bg-black/80 transition text-xl"
              >
                ›
              </Button>

              {/* Thumbnail strip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                              flex gap-2 overflow-x-auto max-w-[90vw] px-2">
                {images.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16
                                overflow-hidden rounded cursor-pointer border-2
                                transition-all
                                ${i === activeIndex
                                  ? "border-white opacity-100"
                                  : "border-transparent opacity-50 hover:opacity-80"
                                }`}
                  >
                    <img
                      src={src}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};