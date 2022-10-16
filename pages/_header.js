import Image from 'next/image';

function Header() {
  return (
    <header>
      <div id="logo">
        <Image src="/primary-logo-2022.png" width={100} height={100} alt="World with seven stars in the middle" />
      </div>
      <p>
        <b><i>forum cache</i></b> is an <i>ongoing experiment</i> seeking to utilize specialized, multidisciplinary, 
        and interdisciplinary art practices to document the times, express ourselves in the present, design the future,
        and engineer the answers to world crises.
      </p>
    </header>
  )
}

export default Header;