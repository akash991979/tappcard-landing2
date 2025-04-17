
  import React from 'react';
  import { ThemeProvider } from './next-themes';
  import { RouterProvider } from 'next/router';
  import './styles.css';
  import Demo from './demo';
  
  export default function App() {
  
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <RouterProvider>
          <div className="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground">
            <div className="absolute lab-bg inset-0 size-full">
              <div className="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div>
            </div>
            <div className="flex w-full justify-center relative">
              <Demo />
            </div>
          </div>
        </RouterProvider>
      </ThemeProvider>
    );
  }
  