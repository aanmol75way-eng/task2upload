import { useUpload } from "../context/UploadContext";

const FileUploader = () => {
  const { addFiles } = useUpload();

  return (
    <label className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-lg">
      Upload Files
      <input
        type="file"
        multiple
        hidden
        onChange={(e) => e.target.files && addFiles(e.target.files)}
      />
    </label>
  );
};

export default FileUploader;
