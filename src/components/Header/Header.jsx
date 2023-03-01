import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://gateway.fxhash.xyz/ipfs/Qmbhm5uiz7AUnAtL8J6PBV6v3khMrp8eyZpPiGoyHAPPEc" alt="Logo" />
    </header>
  )
};

export default Header;