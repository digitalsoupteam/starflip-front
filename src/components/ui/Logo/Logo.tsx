const Logo = () => {
  return (
    <a href={'/'}>
      <img className={'w-12.5 h-auto md:hidden'} src='/logo-s.svg' width={''} alt='logo' />
      <img className={'hidden w-40 h-auto md:block'} src='/logo.svg' width={''} alt='logo' />
    </a>
  );
};

export default Logo;
