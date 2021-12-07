import { useState } from 'react';

export function useCount() {
  const [count, setCount] = useState(1);

  // функция-обработчик события
  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange };
}