import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type UploadStatus = "waiting" | "uploading" | "completed";

type UploadFile = {
  id: string;
  name: string;
  progress: number;
  status: UploadStatus;
};

type UploadContextType = {
  files: UploadFile[];
  addFiles: (files: FileList) => void;
  isOpen: boolean;
  closePanel: () => void;
};

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const uploadNext = () => {
    const nextFile = files.find((f) => f.status === "waiting");
    if (!nextFile) return;

    setFiles((prev) =>
      prev.map((f) =>
        f.id === nextFile.id ? { ...f, status: "uploading" } : f
      )
    );

    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id === nextFile.id) {
            if (f.progress >= 100) {
              clearInterval(interval);
              return { ...f, progress: 100, status: "completed" };
            }
            return { ...f, progress: f.progress + 10 };
          }
          return f;
        })
      );
    }, 400);
  };

  const addFiles = (fileList: FileList) => {
    const newFiles: UploadFile[] = Array.from(fileList).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      progress: 0,
      status: "waiting",
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    setIsOpen(true); // 🔥 auto open panel
  };

  const closePanel = () => setIsOpen(false);

  if (!files.some((f) => f.status === "uploading")) {
    uploadNext();
  }

  return (
    <UploadContext.Provider
      value={{ files, addFiles, isOpen, closePanel }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) throw new Error("useUpload must be used within UploadProvider");
  return context;
};
