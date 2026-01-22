# Rast2 - File Upload Application

A modern file upload application built with React, TypeScript, and Vite. This app allows users to upload files with a clean, intuitive interface and track their upload progress.

## Features

- **File Uploader**: Drag and drop or click to select files for upload
- **Upload Progress Tracking**: Real-time progress indicators for each file
- **Upload List**: View all uploaded files with status and details
- **Context Management**: Centralized state management for upload operations
- **Responsive Design**: Built with Tailwind CSS for a modern, responsive UI
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rast2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/
│   ├── FileUploader.tsx    # Main file upload component
│   ├── UploadItem.tsx      # Individual upload item display
│   └── UploadList.tsx      # List of all uploads
├── context/
│   └── UploadContext.tsx   # Upload state management
├── App.tsx                 # Main application component
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request


