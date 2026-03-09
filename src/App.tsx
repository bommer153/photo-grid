import { Image } from "@heroui/react";

const images = [
  "https://picsum.photos/seed/pool1/600/400",
  "https://picsum.photos/seed/pool2/600/400",
  "https://picsum.photos/seed/pool3/600/400",
  "https://picsum.photos/seed/pool4/600/400",
  "https://picsum.photos/seed/pool5/600/400",
  "https://picsum.photos/seed/pool6/600/400",
];

export default function App() {
  const visible = images.slice(0, 5);
  const remaining = images.length - 5;``

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-[500px] overflow-hidden rounded-lg flex flex-col gap-0.5">

        {/* Top Row — 2 images */}
        <div className="flex gap-0.5">
          {visible.slice(0, 2).map((src, i) => (
            <div key={i} className="flex-1 h-64 overflow-hidden">
              <img
                src={src}
                alt={`photo-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row — 3 images */}
        <div className="flex gap-0.5">
          {visible.slice(2, 5).map((src, i) => (
            <div key={i} className="relative flex-1 h-48 overflow-hidden">
              <Image
                src={src}
                alt={`photo-${i + 2}`}
                className="w-full h-full object-cover"
              />
              {/* +N overlay on last image */}
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
      </div>
    </div>
  );
}