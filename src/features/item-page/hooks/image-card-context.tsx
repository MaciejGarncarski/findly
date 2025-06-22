import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  use,
  useState,
} from "react";

type TImageCardContext = {
  totalImages: number;
  images: Array<{
    title: string;
    url: string;
  }>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export const ImageCardContext = createContext<TImageCardContext | null>(null);

export const ImageCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    {
      title: "test",
      url: "https://media.tenor.com/_l_5p1vtSE0AAAAM/chiens-funnyanimals.gif",
    },
    {
      title: "cool cat",
      url: "https://media.tenor.com/AIk0e-e7pvIAAAAC/cat-cool.gif",
    },
  ];

  const totalImages = images.length;

  return (
    <ImageCardContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        totalImages,
        images,
      }}
    >
      {children}
    </ImageCardContext.Provider>
  );
};

export function useImageCardContext() {
  const context = use(ImageCardContext);

  if (!context) {
    throw new Error(
      "useCurrentUser has to be used within <ImageCardContextProvider>"
    );
  }

  return context;
}
