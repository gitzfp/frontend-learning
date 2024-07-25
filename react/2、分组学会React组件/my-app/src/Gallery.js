import {AppLogo} from "./AppLogo";
import {Profile} from './Profile'
import AlbertEinstein from './AlbertEinstein.jpg'

// function Profile() {
//     return  <img width={100} src={AlbertEinstein} alt="Albert Einstein" />
// }

export default function Gallery() {
    return <div>
        <h1>了不起的科学家</h1>
        <Profile />
        <Profile />
        <AppLogo />
    </div>
}