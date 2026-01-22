type Props = {
  name: string;
  progress: number;
  status: string;
};

const UploadItem = ({ name, progress, status }: Props) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-medium">
        <span className="truncate">{name}</span>
        <span className="capitalize">{status}</span>
      </div>

      <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default UploadItem;
