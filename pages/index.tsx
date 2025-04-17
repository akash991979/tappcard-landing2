import { GetStaticProps } from 'next';
import Demo from '../demo';

export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full m-auto p-16 bg-background text-foreground">
      <div className="absolute lab-bg inset-0 size-full">
        <div className="absolute inset-0 bg-[radial-gradient(#00000021_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]"></div>
      </div>
      <div className="flex w-full justify-center relative">
        <Demo />
      </div>
    </div>
  );
}

// This function enables Static Site Generation
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    // Revalidate every hour (3600 seconds)
    revalidate: 3600,
  };
} 