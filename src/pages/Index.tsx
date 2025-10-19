import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Sneaker {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

const sneakers: Sneaker[] = [
  {
    id: 1,
    name: 'Air Speed Pro',
    price: 8990,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/7ce46015-cec0-49cd-8f2c-dbdbdc912eb4.jpg',
    category: 'Бег',
    brand: 'Nike',
  },
  {
    id: 2,
    name: 'Ultra Jump Max',
    price: 12990,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/f555d62d-f311-49d3-bdbe-1a14e5138a07.jpg',
    category: 'Баскетбол',
    brand: 'Adidas',
  },
  {
    id: 3,
    name: 'Sport Elite X',
    price: 9990,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/4a7053cd-ec63-4a7b-808a-58b16c4dd590.jpg',
    category: 'Тренинг',
    brand: 'Puma',
  },
  {
    id: 4,
    name: 'Fast Track Runner',
    price: 7990,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/7ce46015-cec0-49cd-8f2c-dbdbdc912eb4.jpg',
    category: 'Бег',
    brand: 'Reebok',
  },
  {
    id: 5,
    name: 'Power Slam High',
    price: 13990,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/f555d62d-f311-49d3-bdbe-1a14e5138a07.jpg',
    category: 'Баскетбол',
    brand: 'Nike',
  },
  {
    id: 6,
    name: 'Dynamic Trainer',
    price: 8490,
    image: 'https://cdn.poehali.dev/projects/042c71f7-94a5-45fc-9eba-0e798cff8f2b/files/4a7053cd-ec63-4a7b-808a-58b16c4dd590.jpg',
    category: 'Тренинг',
    brand: 'Adidas',
  },
  {
    id: 7,
    name: 'Kali Sport Urban',
    price: 1500,
    image: 'https://cdn.poehali.dev/files/a23d3f55-ca77-4dc3-923a-2666aa65f2ec.jpg',
    category: 'Тренинг',
    brand: 'Kali Sport',
  },
  {
    id: 8,
    name: 'Kali Sport Classic',
    price: 1500,
    image: 'https://cdn.poehali.dev/files/7eca3d09-7b80-4149-972c-18476e2b296d.jpg',
    category: 'Тренинг',
    brand: 'Kali Sport',
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const categories = ['Все', 'Бег', 'Баскетбол', 'Тренинг'];

  const filteredSneakers = selectedCategory === 'Все' 
    ? sneakers 
    : sneakers.filter(s => s.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SNEAKERSHOP
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">
                Каталог
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="ShoppingCart" size={18} className="mr-2" />
                Корзина
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2 text-sm">
              🔥 Новая коллекция 2024
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Движение —<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                это жизнь
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Найди свою идеальную пару кроссовок для тренировок, бега и повседневной жизни.
              Энергия, стиль и комфорт в каждом шаге.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg">
                О бренде
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-20">
          <Icon name="Zap" size={400} className="text-primary absolute rotate-12" />
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог кроссовок</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбери модель для своего стиля тренировок
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-0' 
                  : 'border-2 hover:border-primary'}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSneakers.map((sneaker) => (
              <Card 
                key={sneaker.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={sneaker.image} 
                      alt={sneaker.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-primary border-0">
                      {sneaker.brand}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-secondary text-secondary">
                    {sneaker.category}
                  </Badge>
                  <CardTitle className="text-2xl mb-2">{sneaker.name}</CardTitle>
                  <CardDescription className="text-lg">
                    Профессиональные кроссовки для спорта
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">
                    {sneaker.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы? Мы всегда на связи!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Адрес магазина</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Спортивная, д. 15<br />
                        Пн-Вс: 10:00 - 21:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (495) 123-45-67<br />
                        info@sneakershop.ru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>Заполните форму и мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите, чем мы можем помочь..."
                      rows={5}
                      required
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} />
                </div>
                <h3 className="text-xl font-bold">SNEAKERSHOP</h3>
              </div>
              <p className="text-gray-400">
                Твой путь к идеальным кроссовкам начинается здесь
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-gray-600 hover:border-primary hover:bg-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 hover:border-primary hover:bg-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 hover:border-primary hover:bg-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 SNEAKERSHOP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;