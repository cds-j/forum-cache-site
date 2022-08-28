import Image from 'next/Image';

export default function Construction() {
    return (
        <div id="construction">
            <div className="image-wrapper">
                <Image class="image-logo" src="/primary-logo-2022-(white).png" width={200} height={200} alt="Globe with 7 stars"/>
            </div>
            <div className="image-wrapper">
                <Image class="image-typographic" src="/typographic-logo-01-(white).png" width={150} height={25} alt="Forum Cache handwritten"/>
            </div>
            <p>
                a work in progress.<br/>
                feel free to get in contact with<br/>
                <a href="https://cds-j.github.io">Corey D Sherrard Jr</a> about anything<br/>
                that has to do with FORUM CACHE.<br/>
                what is it?<br/>
                we&lsquo;ll let you know real soon...
            </p>
        </div>
    )
}