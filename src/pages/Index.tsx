import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'characters', label: 'Персонажи', icon: 'Users' },
    { id: 'items', label: 'Предметы', icon: 'Package' },
    { id: 'bosses', label: 'Боссы', icon: 'Skull' },
    { id: 'mechanics', label: 'Механики', icon: 'Cog' },
    { id: 'lore', label: 'Сюжет и лор', icon: 'BookOpen' },
    { id: 'locations', label: 'Локации', icon: 'Map' },
  ];

  const characters = [
    { name: 'Isaac', description: 'Стартовый персонаж с базовыми характеристиками', stats: 'HP: 3, Скорость: 1.0, Урон: 3.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/9c18bf18-9ef0-4f63-b6be-152eaf5a01d3.jpg' },
    { name: 'Magdalene', description: 'Персонаж с увеличенным здоровьем', stats: 'HP: 4, Скорость: 0.85, Урон: 3.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/989399c0-ec78-49e8-80d1-eeff20d3c78f.jpg' },
    { name: 'Cain', description: 'Удачливый персонаж с повышенным шансом дропа', stats: 'HP: 2, Скорость: 1.2, Урон: 3.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/9c18bf18-9ef0-4f63-b6be-152eaf5a01d3.jpg' },
    { name: 'Judas', description: 'Высокий урон, но низкое здоровье', stats: 'HP: 1, Скорость: 1.0, Урон: 4.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/9c18bf18-9ef0-4f63-b6be-152eaf5a01d3.jpg' },
    { name: 'Eve', description: 'Становится сильнее при низком здоровье', stats: 'HP: 2, Скорость: 1.23, Урон: 3.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/989399c0-ec78-49e8-80d1-eeff20d3c78f.jpg' },
    { name: 'Samson', description: 'Получает урон за убийства', stats: 'HP: 3, Скорость: 1.1, Урон: 3.5', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/9c18bf18-9ef0-4f63-b6be-152eaf5a01d3.jpg' },
  ];

  const items = [
    { name: 'The Inner Eye', type: 'Пассивный', effect: 'Тройной выстрел, уменьшает скорость атаки', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/79d10768-dd01-489a-8fec-acccef5ec15c.jpg' },
    { name: 'Brimstone', type: 'Пассивный', effect: 'Заменяет слёзы на лазерный луч', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/2f702095-22c0-4eab-a41b-e26e25758b2e.jpg' },
    { name: 'Mom\'s Knife', type: 'Пассивный', effect: 'Заменяет слёзы на летающий нож', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/2f702095-22c0-4eab-a41b-e26e25758b2e.jpg' },
    { name: 'Sacred Heart', type: 'Пассивный', effect: 'Огромное увеличение урона, самонаводящиеся слёзы', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/79d10768-dd01-489a-8fec-acccef5ec15c.jpg' },
    { name: 'Tech X', type: 'Пассивный', effect: 'Стреляет лазерными кольцами', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/2f702095-22c0-4eab-a41b-e26e25758b2e.jpg' },
    { name: 'Dr. Fetus', type: 'Пассивный', effect: 'Заменяет слёзы на взрывающиеся бомбы', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/2f702095-22c0-4eab-a41b-e26e25758b2e.jpg' },
  ];

  const bosses = [
    { name: 'Monstro', location: 'Basement', difficulty: 'Легкий', description: 'Огромное чудовище, прыгающее по комнате', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/0111da16-107c-488e-9556-12392b8387f2.jpg' },
    { name: 'Mom', location: 'Depths II', difficulty: 'Средний', description: 'Первый серьёзный босс игры', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/4a3e9fe5-2811-4941-bacd-9c91567a8c22.jpg' },
    { name: 'Satan', location: 'Sheol', difficulty: 'Сложный', description: 'Финальный босс оригинальной концовки', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/f68d7e7a-0866-4adf-98c3-3fcd9dc86053.jpg' },
    { name: 'Isaac', location: 'Cathedral', difficulty: 'Сложный', description: 'Босс альтернативного пути', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/f68d7e7a-0866-4adf-98c3-3fcd9dc86053.jpg' },
    { name: 'The Lamb', location: 'Dark Room', difficulty: 'Очень сложный', description: 'Финальный босс тёмного пути', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/f68d7e7a-0866-4adf-98c3-3fcd9dc86053.jpg' },
    { name: 'Mega Satan', location: 'Dark Room/Chest', difficulty: 'Экстремальный', description: 'Секретный финальный босс', image: 'https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/f68d7e7a-0866-4adf-98c3-3fcd9dc86053.jpg' },
  ];

  const locations = [
    { name: 'Basement', floors: 'I-II', description: 'Начальные уровни игры' },
    { name: 'Caves', floors: 'I-II', description: 'Пещеры с более сильными врагами' },
    { name: 'Depths', floors: 'I-II', description: 'Глубины, где обитает Mom' },
    { name: 'Womb', floors: 'I-II', description: 'Утроба с органическими врагами' },
    { name: 'Cathedral', floors: 'Final', description: 'Светлый финальный уровень' },
    { name: 'Sheol', floors: 'Final', description: 'Тёмный финальный уровень' },
    { name: 'Dark Room', floors: 'Final+', description: 'Секретный тёмный уровень' },
    { name: 'The Chest', floors: 'Final+', description: 'Секретный светлый уровень' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-serif font-bold">The Binding of Isaac Wiki</h1>
            </div>
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск по вики..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-[240px_1fr] gap-6">
          <aside className="sticky top-20 h-fit">
            <Card className="p-4">
              <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">Навигация</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent rounded-sm transition-colors"
                  >
                    <Icon name={section.icon as any} size={16} />
                    {section.label}
                  </a>
                ))}
              </nav>
            </Card>
          </aside>

          <main className="space-y-8">
            <section id="main">
              <Card className="p-6">
                <div className="flex gap-6">
                  <img
                    src="https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/7f413546-3544-403c-b844-3f8d938200cc.jpg"
                    alt="The Binding of Isaac"
                    className="w-64 h-64 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-serif font-bold mb-4">The Binding of Isaac</h1>
                    <p className="text-base leading-relaxed mb-4">
                      <strong>The Binding of Isaac</strong> — инди-игра в жанре roguelike, разработанная Эдмундом Макмилленом и Флорианом Химслом. Игра была выпущена в 2011 году и быстро завоевала популярность благодаря уникальной атмосфере, глубокому геймплею и бесконечной реиграбельности.
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                      Игра рассказывает историю мальчика Исаака, чья мать, услышав голос Бога, требующий принести сына в жертву, начинает преследовать его. Исаак убегает в подвал своего дома, где сталкивается с множеством монстров, представляющих его страхи и травмы.
                    </p>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Разработчик:</span> Edmund McMillen, Florian Himsl
                      </div>
                      <div>
                        <span className="text-muted-foreground">Издатель:</span> Edmund McMillen
                      </div>
                      <div>
                        <span className="text-muted-foreground">Дата выхода:</span> 28 сентября 2011
                      </div>
                      <div>
                        <span className="text-muted-foreground">Жанр:</span> Roguelike, Twin-stick shooter
                      </div>
                      <div>
                        <span className="text-muted-foreground">Платформы:</span> PC, Mac, Linux, консоли
                      </div>
                      <div>
                        <span className="text-muted-foreground">Движок:</span> Flash (оригинал), собственный (Rebirth)
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section id="characters">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Персонажи
                </h2>
                <p className="text-base mb-6 leading-relaxed">
                  В игре доступно множество играбельных персонажей, каждый из которых обладает уникальными характеристиками и стартовыми предметами. Выбор персонажа кардинально влияет на стиль игры и стратегию прохождения.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {characters.map((char) => (
                    <div key={char.name} className="border rounded-sm p-4 hover:bg-accent/50 transition-colors flex gap-4">
                      <img src={char.image} alt={char.name} className="w-20 h-20 object-cover rounded border" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-primary">{char.name}</h3>
                        <p className="text-sm mb-2">{char.description}</p>
                        <p className="text-xs text-muted-foreground font-mono">{char.stats}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            <section id="items">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Предметы
                </h2>
                <p className="text-base mb-6 leading-relaxed">
                  Система предметов — основа геймплея The Binding of Isaac. В игре существуют сотни различных предметов, которые могут взаимодействовать друг с другом, создавая мощные синергии. Предметы делятся на активные (используются по кнопке) и пассивные (постоянный эффект).
                </p>
                
                <div className="mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/81f94b0b-a51c-4232-95ff-61f4f275cc21.jpg"
                    alt="Items Gallery"
                    className="w-full h-64 object-cover rounded border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div key={item.name} className="border rounded-sm p-4 hover:bg-accent/50 transition-colors flex gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                          <span className="text-xs bg-secondary px-2 py-1 rounded">{item.type}</span>
                        </div>
                        <p className="text-sm">{item.effect}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            <section id="bosses">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="Skull" size={24} />
                  Боссы
                </h2>
                <p className="text-base mb-6 leading-relaxed">
                  Боссы встречаются в конце каждого этажа и представляют значительную угрозу для игрока. Каждый босс имеет уникальные паттерны атак и требует особого подхода для победы. Некоторые боссы являются финальными и открываются только после выполнения определённых условий.
                </p>

                <div className="mb-6">
                  <img
                    src="https://cdn.poehali.dev/projects/45444562-a329-43b8-9573-916149b5883a/files/f68d7e7a-0866-4adf-98c3-3fcd9dc86053.jpg"
                    alt="Bosses Gallery"
                    className="w-full h-64 object-cover rounded border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bosses.map((boss) => (
                    <div key={boss.name} className="border rounded-sm p-4 hover:bg-accent/50 transition-colors flex gap-4">
                      <img src={boss.image} alt={boss.name} className="w-24 h-24 object-cover rounded border" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-primary">{boss.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            boss.difficulty === 'Легкий' ? 'bg-green-100 text-green-800' :
                            boss.difficulty === 'Средний' ? 'bg-yellow-100 text-yellow-800' :
                            boss.difficulty === 'Сложный' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {boss.difficulty}
                          </span>
                        </div>
                        <p className="text-sm mb-1">{boss.description}</p>
                        <p className="text-xs text-muted-foreground">Локация: {boss.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            <section id="mechanics">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="Cog" size={24} />
                  Механики игры
                </h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Roguelike элементы</h3>
                    <p>Каждое прохождение генерируется случайным образом. Комнаты, враги, предметы и боссы появляются в случайном порядке, что делает каждую игру уникальной. Смерть необратима — при гибели нужно начинать с начала.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-2">Система характеристик</h3>
                    <p>Персонаж имеет несколько основных характеристик: здоровье, урон, скорость передвижения, скорость атаки, дальность, удачу. Все предметы влияют на эти характеристики по-разному.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Синергии предметов</h3>
                    <p>Многие предметы взаимодействуют друг с другом, создавая мощные комбинации. Например, предмет "Brimstone" в сочетании с "Spoon Bender" создаёт самонаводящийся лазер.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Секретные комнаты</h3>
                    <p>На каждом этаже есть скрытые комнаты, которые можно найти, используя бомбы. Они содержат дополнительные предметы, валюту и секреты.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Система валют</h3>
                    <p>В игре существует несколько типов валют: монеты (покупки в магазине), ключи (открытие сундуков и дверей), бомбы (разрушение препятствий), сердца (здоровье).</p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="lore">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Сюжет и лор
                </h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    <strong>The Binding of Isaac</strong> рассказывает историю мальчика Исаака, живущего счастливой жизнью со своей матерью на небольшом холме. Мать Исаака смотрит христианские телепередачи, а Исаак рисует и играет с игрушками в своей комнате.
                  </p>

                  <p>
                    Однажды мать слышит голос свыше, который она считает голосом Бога. Голос говорит, что её сын погряз в грехе и должен быть спасён. Мать забирает у Исаака все игрушки, одежду и запирает его в комнате голым. Голос снова звучит, говоря, что этого недостаточно — нужно принести сына в жертву.
                  </p>

                  <p>
                    Мать берёт кухонный нож и направляется к комнате Исаака. Мальчик, наблюдая за происходящим через щель в двери, в панике ищет путь к спасению. Он замечает люк в полу своей комнаты, который ведёт в подвал, полный монстров и ужасов.
                  </p>

                  <div className="bg-secondary p-4 rounded border-l-4 border-primary">
                    <h3 className="font-bold mb-2">Религиозный символизм</h3>
                    <p className="text-sm">
                      Игра наполнена библейскими отсылками и религиозной символикой. Название отсылает к библейской истории о жертвоприношении Исаака Авраамом. Многие предметы, враги и боссы имеют религиозные названия и происхождение.
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded border-l-4 border-primary">
                    <h3 className="font-bold mb-2">Психологическая интерпретация</h3>
                    <p className="text-sm">
                      Многие элементы игры можно интерпретировать как проявления детских страхов и травм. Монстры в подвале представляют внутренние демоны Исаака, его страх перед матерью, религией и самим собой. Различные концовки раскрывают разные аспекты психологического состояния ребёнка.
                    </p>
                  </div>

                  <p>
                    Игра имеет множество концовок, каждая из которых раскрывает новые детали истории Исаака. С каждым прохождением открываются новые персонажи, предметы и уровни, углубляя понимание происходящего и оставляя больше вопросов, чем ответов.
                  </p>
                </div>
              </Card>
            </section>

            <section id="locations">
              <Card className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Icon name="Map" size={24} />
                  Локации
                </h2>
                <p className="text-base mb-6 leading-relaxed">
                  Игра состоит из множества этажей, каждый из которых представляет собой процедурно генерируемый уровень. По мере продвижения вглубь сложность возрастает, а враги становятся опаснее. Каждая локация имеет уникальную визуальную стилистику и набор врагов.
                </p>

                <div className="space-y-3">
                  {locations.map((location) => (
                    <div key={location.name} className="border rounded-sm p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-primary">{location.name}</h3>
                          <p className="text-sm mt-1">{location.description}</p>
                        </div>
                        <span className="text-xs bg-secondary px-2 py-1 rounded ml-4 whitespace-nowrap">
                          {location.floors}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-secondary p-4 rounded">
                  <h3 className="font-bold mb-2">Альтернативные пути</h3>
                  <p className="text-sm">
                    После прохождения Depths II игрок может выбрать один из двух путей: Cathedral (светлый путь) или Sheol (тёмный путь). Выбор пути влияет на дальнейшие локации и финальных боссов. Для доступа к секретным уровням Dark Room и The Chest необходимо победить определённых боссов.
                  </p>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </div>

      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>The Binding of Isaac Wiki — фанатская энциклопедия</p>
            <p className="mt-2">Вся информация взята из открытых источников и игровых данных</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;