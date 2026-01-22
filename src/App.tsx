import FileUploader from "./components/FileUploader";
import UploadList from "./components/UploadList";

const App = () => {
  return (
    <div className="min-h-screen p-10">
      <FileUploader />
      <UploadList />
    </div>
  );
};

export default App;
