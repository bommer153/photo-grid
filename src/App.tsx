import { Image } from "@heroui/react";
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
    <div className="p-4 w-1/2 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Photo Grid Example</h1>
      <PhotoGrid images={images} />
    </div>
  );
}