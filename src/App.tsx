import { PhotoGrid } from "./Components/PhotoGrid";

const images = [
  "https://picsum.photos/seed/pool1/600/400",
  "https://picsum.photos/seed/pool2/600/400",
  "https://picsum.photos/seed/pool3/600/400",
  "https://picsum.photos/seed/pool4/600/400",
  "https://picsum.photos/seed/pool5/600/400",
  "https://picsum.photos/seed/pool6/600/400",
];

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* w-full on mobile, max-w-[500px] on larger screens */}
      <div className="w-full max-w-[500px]">
        <PhotoGrid images={images} />
      </div>
    </div>
  );
}