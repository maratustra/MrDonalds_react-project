export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = item => (
  item.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  })
);