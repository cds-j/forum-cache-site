import Image from 'next/Image';

function Header() {
    return (
        <div id="header">
            <h1>Forum Cache</h1>
            <div id="header-logo">
                <Image src="/primary-logo-2022.png" width={75} height={75} alt="World with seven stars in the middle" />
            </div>
            <nav>
                <ul id="navigation">
                    <li>issue[s]</li>
                    <li>links</li>
                    <li>about</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;