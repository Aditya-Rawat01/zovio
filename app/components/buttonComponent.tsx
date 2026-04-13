"use client";

import { useRouter, usePathname } from "next/navigation";

type buttonProps = {
    className: string,
    sectionId: string,
    name: string,
    children?:React.ReactElement
}

export const Button = ({sectionId, className, name, children}:buttonProps)=>{
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        const element = document.getElementById(sectionId);
        
        if (element) {
            // If the section exists on current page, scroll to it
            element.scrollIntoView({ behavior: "smooth" });
        } else if (pathname !== "/") {
            // If section doesn't exist and we're not on home page, navigate to home with hash
            router.push(`/#${sectionId}`);
        }
    };

    return <button
    className={className}
    onClick={handleClick}
>
  {name}
  {children}
</button>
}



