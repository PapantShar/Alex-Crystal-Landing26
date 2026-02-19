import Link from 'next/link';

export default function MenuItems({
  visibleSection,
  visibility,
  onChildClick,
}) {
  const links = [
    { href: '#about', label: 'Обо Мне' },
    { href: '#schedule', label: 'Расписание' },
    { href: '#gallery', label: 'Галерея' },
    { href: '#feedback', label: 'Отзывы' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <div
      className=" block text-right text-base lg:flex lg:flex-row"
      aria-label="NavMenu"
    >
      {links.map((link) => (
        <div key={link.href} onClick={onChildClick}>
          <Link
            className={` 
                  ${visibility ? 'block' : 'hidden'} 
                  ${
                    link.href.includes(visibleSection)
                      ? 'text-orange-550'
                      : 'text-inherit'
                  }
                 
                pb-2.5 pr-2.5 pt-2.5 hover:bg-orange-550 hover:text-white   lg:mx-4 lg:flex lg:p-0  lg:pt-0 `}
            href={link.href}
          >
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
