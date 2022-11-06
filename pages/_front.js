import Image from "next/image";

function Reserve() {
  return (
    <div id="reserve-block">
      <p>currently in production...</p>
      <h1>reserve®</h1>
      <h2>jazz/art/political publication</h2>
      <div className="paragraph-block">
        <p>
          reserve® is a publication seeking to share insight on contemporary jazz as art
          (within all disciplines). Every issue prioritizes space for fundamental political
          text concerning socialism/communism, decolonization, organizing, the black
          radical tradition, and afrofuturism. Although recently conceived, this will be
          a public undertaking and we want jazz lovers, artists, historians, enthusiasts, writers,
          educators, students, and everyone adjacent to contribute to this effort for social/cultural 
          documentation and political education.
        </p>
        <p>
          We are actively building an online space, and are inquiring about an in-person space
          in Houston, Texas for contributors to add onto the first issue (maybe something like <a
          href="https://github.com" target="_blank" rel="noreferrer">github</a>.) At the moment, 
          if you are interested in something like this, please feel free to email reserve@forumcache.xyz or
          dm <a href="https://instagram.com/cds__j" target="_blank" rel="noreferrer">@cds__j</a> on 
          Instagram.
        </p>
        <p>
          The physical issue is currently being designed in <a href="https://figma.com" target="_blank" rel="noreferrer">Figma</a>.
        </p>                                                        
      </div>
    </div>
  )
}

function ForumCache() {
  return (
    <div id="forum-cache-block">
      <div>
        <Image src="/primary-logo-2022.png" width={250} height={250} alt="World with seven stars inside" />
      </div>
      <div id="forum-cache-block-text">
        <h1>forum cache</h1>
        <h2>learning/creating in public</h2>
        <div className="paragraph-block">
          <p>
            The desire to live beyond the capital required by the 0.01% to survive in their world
            only makes us human. There&apos;s no version of this present dystopia that will give us that, so it 
            is up to us to fight, build, draft, grow, execute, commune, and manifest liberation.
          </p>
        </div>
      </div>
    </div>
  )
}

function Front() {
  return (
    <div id="front">
      <Reserve/>
      <ForumCache/>
    </div>
  )
}

export default Front;
