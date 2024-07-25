// Components.js
import AlbertEinstein from './AlbertEinstein.jpg'
import { AppLogo } from './AppLogo';

export function Profile() {
    return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
  }
  
export function Gallery() {
return (
    <section>
    <h1>了不起的科学家</h1>
    <AppLogo />
    <AppLogo />
    <AppLogo />
    </section>
);
}
