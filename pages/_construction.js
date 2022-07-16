import Image from 'next/image';

export default function Construction() {
    return (
        <div id="construction">
            <Image src="/primary-logo-2022-(white).png" width="200px" height="200px" alt="Globe with 7 stars"/>
            <div className='description'>
                <Image src="/typographic-logo-01-(white).png" width="240px" height="40px" alt="Forum Cache handwritten" />
                <p>
                    &quot;blackness is fire... manmade and crackling, soot swallowing 
                    <br/>native & neighbor like the sweetest taboo.&quot;
                </p>
                <p id="stars">★★★★★★★</p>
            </div>
        </div>
    )
}