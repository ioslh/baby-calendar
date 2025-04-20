'use client';

import { useState, useEffect } from 'react';
import { formatDate } from '@/lib/utils';

interface DateInputProps {
  onChange: (date: string) => void;
  value: string;
}

export default function DateInput({ onChange, value }: DateInputProps) {
  const [localDate, setLocalDate] = useState<string>(value || formatDate(new Date()));

  // 当组件接收到新的value prop时更新本地状态
  useEffect(() => {
    if (value) {
      setLocalDate(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setLocalDate(newDate);
    onChange(newDate);
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor="birthDate" 
        className="block text-sm font-medium text-gray-700"
      >
        宝宝出生日期
      </label>
      <input
        id="birthDate"
        type="date"
        value={localDate}
        onChange={handleChange}
        className="block px-4 w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        required
      />
    </div>
  );
}