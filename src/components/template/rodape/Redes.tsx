import RedeSocial from "./RedeSocial"
import { IconBrandInstagram, IconBrandFacebook, IconLock } from "@tabler/icons-react"

export default function Redes() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/ateliemariquefaz/" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/ateliemariquefaz" /> 
            <RedeSocial icone={<IconLock />} url=""/>
        </div>
    )
}