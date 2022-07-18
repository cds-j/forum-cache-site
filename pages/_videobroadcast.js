import Image from 'next/image';

export default function VideoBroadcast() {
    return (
        <div>
            <div id="logo-and-description">
                <div id="logos">
                    <div className="image-wrapper">
                        <Image class="image-logo" src="/primary-logo-2022-(white).png" width={100} height={100} alt="Globe with 7 stars"/>
                    </div>
                    <div className="image-wrapper">
                        <Image class="image-typographic" src="/typographic-logo-01-(white).png" width={150} height={25} alt="Forum Cache handwritten" />
                    </div>
                </div>
                <p>
                    FORUM CACHE is here to love ORIGINAL BLACK ARTFORMS.<br/>
                    so, I made a playlist of JAZZ performances, documentaries, interviews, etc.<br/>
                    for you to watch, listen, play while you work, play while you play...<br/>
                    <i>until we get this site done.</i>
                </p>
            </div>
            
            <div id="video-broadcast">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/videoseries?list=PL_Ms2lQiRC8kOi0j_VJAiy_Wy4EfYPKoW" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <p id="contact">
                thank you for being here.<br/>
                for contact with the DEVELOPER, <a href="https://cds-j.github.io" target="_blank" rel="noreferrer">click here</a>
            </p>
        </div>  
    )
}