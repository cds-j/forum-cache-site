import Image from 'next/image';

const articles = [
    {
        issue: 1,
        header: <h2>▶︎</h2>,
        subheader: <h3>Art as a means for survival...<br/>Black is what black does, so we do.</h3>,
        content: <div>
                    <p>
                        It doesn&apos;t quite make sense to reinvent the wheel. Nor does it make sense to push the same broken chariot
                        to the end of the trail as if it led to gold. Yet, the effort is always worth the growth achieved. Jazz embodies the spirit
                        of black expression in rare form. The arts (Painting, Sculpture, Film, Literature, Music, Architecture, and Performance) are 
                        available for black life to survive the moment and dream about the future. The sciences as they relate to the arts truly empower 
                        our imaginations to envision a black future commandeered by our united competencies. 
                    </p>
                    <p>
                        Time is of the essence and responding at the right moment makes for a great improviser. This is jazz moving along the current
                        that unforeseen forces steer. What is left to engineer is in the hands of blackness defined, deconstructed, reassessed, and redefined.
                        None of us have the all-encompassing answer to liberation that we seek. We look to the arts, the sciences, a higher power, to design
                        that future for ourselves. The black world is what black life is and black is what black does. There&apos;s no need for the corporation, 
                        no natural binding to capital. An ism is one&apos;s ism. As long as we so ever desire true freedom, we make to serve that condition.
                    </p>
                </div>
    },
    {
        issue: 2,
        number: <h2></h2>,
        subheader: <h3></h3>,
        content: <p></p>
    }
]

function Lander() {
    return (
        <div id="lander">
            <div>
                <h2>▶︎</h2>
                <h3>in the process...<br/>function for the improviser & bleeding</h3>
            </div>
        </div>
    )
}

export default Lander;