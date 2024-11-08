import dynamic from "next/dynamic";


interface IBackgroundImage {
  backgroundImage: any;
  title: string;
  subtitle: string;
  description: string;
  IsPublic: boolean;
};

const DynamicImageComponent = dynamic(() => import("next/image"), { ssr: false });

export default async function Home() {
  let backgroundImages: IBackgroundImage[] = [];

  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-activities?populate=*`);
    const res = await request.json();
    backgroundImages = res.data || [];
  } catch (error) {
    console.error("Error fetching background images:", error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {backgroundImages
        .filter(({ IsPublic }) => IsPublic)
        .map(({ backgroundImage, title, subtitle }) => (
          <DynamicImageComponent
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${backgroundImage?.formats?.thumbnail?.url}`}
            key={subtitle}
            alt={title}
            width={1000}
            height={1000}
          />
        ))}
    </div>
  );
}
