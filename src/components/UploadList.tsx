import { X } from "lucide-react";
import { useUpload } from "../context/UploadContext";
import UploadItem from "./UploadItem";

const UploadList = () => {
  const { files, isOpen, closePanel } = useUpload();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-xl rounded-xl border">
      
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b">
        <button
          onClick={closePanel}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <X size={18} />
        </button>
        <h3 className="font-semibold">Uploading files</h3>
      </div>

      {/* List */}
      <div className="max-h-64 overflow-y-auto p-3 space-y-3">
        {files.map((file) => (
          <UploadItem
            key={file.id}
            name={file.name}
            progress={file.progress}
            status={file.status}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadList;
