import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const LoanCalculator = () => {
  const [amount, setAmount] = useState([40000]);
  const [days, setDays] = useState([30]);

  const minAmount = 1000;
  const maxAmount = 75000;
  const minDays = 1;
  const maxDays = 30;

  const rate = 0.001;
  const totalToPay = Math.round(amount[0] * (1 + rate * days[0]));

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + days[0]);
  const formattedDate = returnDate.toLocaleDateString('ru-RU');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-scale-in">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {amount[0].toLocaleString('ru-RU')} ₽
              </h2>
              <div className="relative pt-2">
                <Slider
                  value={amount}
                  onValueChange={setAmount}
                  min={minAmount}
                  max={maxAmount}
                  step={1000}
                  className="relative"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{minAmount.toLocaleString('ru-RU')} руб.</span>
                <span>{maxAmount.toLocaleString('ru-RU')} руб.</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {days[0]} {days[0] === 1 ? 'день' : days[0] < 5 ? 'дня' : 'дней'}.
              </h2>
              <div className="relative pt-2">
                <Slider
                  value={days}
                  onValueChange={setDays}
                  min={minDays}
                  max={maxDays}
                  step={1}
                  className="relative"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Срок от {minDays} день</span>
                <span>до {maxDays} дней</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">Срок возврата:</span>
                <span className="text-gray-900 font-semibold text-lg">{formattedDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">Ставка:</span>
                <span className="text-gray-900 font-semibold text-lg">{(rate * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">Сумма к оплате:</span>
                <span className="text-gray-900 font-bold text-2xl">{totalToPay.toLocaleString('ru-RU')} RUB</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full h-16 text-xl font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-lime-400 flex items-center justify-center">
                  <Icon name="ArrowRight" size={24} className="text-white" />
                </div>
                <span>Получить деньги</span>
              </div>
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Icon name="Shield" size={20} className="text-blue-600" />
              <span className="text-sm">Ваши данные под защитой.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
