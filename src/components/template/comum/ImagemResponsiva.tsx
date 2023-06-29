import Image, { StaticImageData } from "next/image"

interface ImagemResponsivaProps {
    imagem: StaticImageData    
    className?: string
}

export default function ImagemResponsiva(props: ImagemResponsivaProps) {
    return (
        <Image
            src={props.imagem}
            alt="Imagem"
            className={`
                w-[350px] h-[365px]
                sm:w-[200px] sm:h-[330px]
                md:w-[350px] md:h-[365px]
                lg:w-[350px] lg:h-[365px]
                rounded-xl shadow-lg shadow-zinc-500/100
                ${props.className ?? ''}
            `}
        />
    )
}