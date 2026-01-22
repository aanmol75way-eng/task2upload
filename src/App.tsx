import { useState } from "react";
import Navbar from "./components/Navbar";
import FileUploader from "./components/FileUploader";
import UploadList from "./components/UploadList";

type Tab = "home" | "files" | "shared";

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onChange={setActiveTab} />

      <main className="p-6">
        {activeTab === "home" && (
          <h2 className="text-xl font-semibold">Welcome to Drive</h2>
        )}

        {activeTab === "files" && (
          <div className="space-y-4">
            <FileUploader />
            <p className="text-gray-600">
              Upload and manage your files here.
            </p>
          </div>
        )}

        {activeTab === "shared" && (
          <h2 className="text-xl font-semibold">Shared with you</h2>
        )}
      </main>

      {/* Floating upload panel */}
      <UploadList />
    </div>
  );
};

export default App;
