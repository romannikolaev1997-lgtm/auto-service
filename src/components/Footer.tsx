const links: Record<string, string[]> = {
  "Услуги": ["Диагностика", "Техобслуживание", "Ходовая часть", "Кузовной ремонт"],
  "Компания": ["О нас", "Отзывы", "Контакты", "Вакансии"],
};

function getLinkHref(section: string, item: string) {
  if (section === "Услуги") return "#services";
  if (item === "Контакты") return "#contact";
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Пятый <span className="text-yellow-400">цилиндр</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">Диагностика, ремонт и ТО автомобилей без лишних обещаний.</p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">Самара, пр-т Механиков, 18<br />Пн–Сб, 09:00–20:00</p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-white font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => {
                const href = getLinkHref(title, item);

                return (
                  <li key={item}>
                    {href ? (
                      <a href={href} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">{item}</a>
                    ) : (
                      <span className="text-gray-400 text-sm">{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Пятый цилиндр. Все права защищены.
      </div>
    </footer>
  );
}
