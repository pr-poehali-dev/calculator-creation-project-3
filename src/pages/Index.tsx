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
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      <div className="w-full max-w-xl lg:max-w-2xl">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl animate-scale-in">
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {amount[0].toLocaleString('ru-RU')} ₽
              </h2>
              <div className="relative pt-3 pb-2 px-1">
                <Slider
                  value={amount}
                  onValueChange={setAmount}
                  min={minAmount}
                  max={maxAmount}
                  step={1000}
                  className="relative"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 px-1">
                <span>{minAmount.toLocaleString('ru-RU')} руб.</span>
                <span>{maxAmount.toLocaleString('ru-RU')} руб.</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {days[0]} {days[0] === 1 ? 'день' : days[0] < 5 ? 'дня' : 'дней'}.
              </h2>
              <div className="relative pt-3 pb-2 px-1">
                <Slider
                  value={days}
                  onValueChange={setDays}
                  min={minDays}
                  max={maxDays}
                  step={1}
                  className="relative"
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 px-1">
                <span>Срок от {minDays} день</span>
                <span>до {maxDays} дней</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center gap-3">
                <span className="text-gray-600 text-sm sm:text-base md:text-lg">Срок возврата:</span>
                <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{formattedDate}</span>
              </div>
              <div className="flex justify-between items-center gap-3">
                <span className="text-gray-600 text-sm sm:text-base md:text-lg">Ставка:</span>
                <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{(rate * 100).toFixed(1)}%</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="flex justify-between items-center gap-3">
                <span className="text-gray-700 font-medium text-base sm:text-lg md:text-xl">Сумма к оплате:</span>
                <span className="text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl">{totalToPay.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full h-14 sm:h-16 md:h-[4.5rem] text-lg sm:text-xl md:text-2xl font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white active:scale-95 touch-manipulation"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-lime-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="ArrowRight" size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <span>Получить деньги</span>
              </div>
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-500 pt-2">
              <Icon name="Shield" size={18} className="text-blue-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Ваши данные под защитой.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;