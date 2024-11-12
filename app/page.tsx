import dynamic from "next/dynamic";
import Image from "next/image";

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
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/landing-activities?populate=*`,{
      headers:{
        authorization: `Bearer ${process.env.API_TOKEN}`
      }
    });
    const res = await request.json();
    backgroundImages = res.data || [];
    console.log(res)
  } catch (error) {
    console.error("Error fetching background images:", error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>dsgsdfsdfsdfsdfdf</h1>
      <Image alt="ok" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VrhYm18sDqIdKOZD5ynA_zhI-AfdiL0e-g&s" width={500} height={500}></Image>
      <hr />
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
