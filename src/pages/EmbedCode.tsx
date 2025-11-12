import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const EmbedCode = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const embedUrl = 'https://781b18b3-e1de-4295-8be0-60c69c8d2758.poehali.app/';

  const codes = [
    {
      id: 'fullscreen',
      title: 'Полноэкранный',
      description: 'Рекомендуется для отдельной страницы',
      code: `<div style="position: relative; width: 100%; padding-bottom: 120%; min-height: 800px;">
  <iframe 
    src="${embedUrl}" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy">
  </iframe>
</div>`
    },
    {
      id: 'compact',
      title: 'Компактный',
      description: 'Для врезки в контент страницы',
      code: `<div style="position: relative; width: 100%; max-width: 700px; margin: 0 auto; padding-bottom: 100%; min-height: 700px;">
  <iframe 
    src="${embedUrl}" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy">
  </iframe>
</div>`
    },
    {
      id: 'fixed',
      title: 'Фиксированная высота',
      description: 'Для десктопных сайтов',
      code: `<div style="position: relative; width: 100%; height: 900px;">
  <iframe 
    src="${embedUrl}" 
    style="width: 100%; height: 100%; border: none; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy">
  </iframe>
</div>`
    }
  ];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    toast({
      title: "Скопировано!",
      description: "Код скопирован в буфер обмена",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Код для установки калькулятора
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Выберите подходящий вариант и скопируйте код для вставки на ваш сайт
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 mb-8">
          {codes.map((item, index) => (
            <Card 
              key={item.id} 
              className="p-4 sm:p-6 bg-white animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
                <Button
                  onClick={() => copyToClipboard(item.code, item.id)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shrink-0"
                  size="lg"
                >
                  {copied === item.id ? (
                    <>
                      <Icon name="Check" size={20} className="mr-2" />
                      Скопировано
                    </>
                  ) : (
                    <>
                      <Icon name="Copy" size={20} className="mr-2" />
                      Копировать
                    </>
                  )}
                </Button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm text-gray-100 font-mono whitespace-pre-wrap break-all">
                  {item.code}
                </pre>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
            <Icon name="Info" size={24} className="text-blue-600" />
            Как установить код
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Для Tilda:</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Добавьте блок T123 "HTML-код"</li>
                <li>Вставьте скопированный код</li>
                <li>Сохраните и опубликуйте</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Для WordPress:</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Добавьте блок "HTML"</li>
                <li>Вставьте код</li>
                <li>Опубликуйте страницу</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Для Wix:</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Добавьте элемент "Встроенный код"</li>
                <li>Вставьте код</li>
                <li>Настройте размеры</li>
              </ol>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 shrink-0 mt-0.5" />
                <span>Калькулятор автоматически адаптируется под мобильные устройства, планшеты и десктопы</span>
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 sm:mt-8">
          <a href="/" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors text-sm sm:text-base">
            <Icon name="ArrowLeft" size={20} />
            Вернуться к калькулятору
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmbedCode;
