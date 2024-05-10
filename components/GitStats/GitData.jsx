/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";


const GitData = () => {

    return (
        <section className="pb-10 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"} >
                <img
                    className="w-full h-auto"
                    src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=jannickpepe&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                    alt="JannickPepe"
                    loading="lazy"
                />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                <img
                    className="w-full h-auto"
                    src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=jannickpepe&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                    alt="JannickPepe"
                    loading="lazy"
                />
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                <img
                    className="w-full h-auto"
                    src={`https://skillicons.dev/icons?i=appwrite,babel,bootstrap,cloudflare,css,figma,firebase,git,github,graphql,html,js,jquery,mongodb,mysql,netlify,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode`}
                    alt="JannickPepe"
                    loading="lazy"
                />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img
                    className="w-full h-auto"
                    src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=jannickpepe&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
                    alt="JannickPepe"
                    loading="lazy"
                />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <Link
                        href="https://github.com/jannickpepe/Nextjs-contentlayer-blog"
                        target="_blank"
                        className="w-full"
                    >
                        <img
                        className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=jannickpepe&repo=NanoScience"
                        alt="JannickPepe"
                        loading="lazy"
                        />
                    </Link>
                </ItemLayout>
            </div>
        </section>
    );

};


export default GitData;
