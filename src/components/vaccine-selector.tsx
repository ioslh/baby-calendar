"use client";

import { useState, useEffect } from "react";
import { vaccineConfigs } from "@/lib/vaccines";
import { SelectedVaccines } from "@/lib/types";

interface VaccineSelectorProps {
  onChange: (selected: SelectedVaccines) => void;
  initialSelection?: SelectedVaccines;
}

export default function VaccineSelector({
  onChange,
  initialSelection,
}: VaccineSelectorProps) {
  // 初始化所有疫苗为选中状态，除非提供了初始选择
  const [selected, setSelected] = useState<SelectedVaccines>(() => {
    if (initialSelection) {
      return initialSelection;
    }

    const initial: SelectedVaccines = {};
    Object.keys(vaccineConfigs).forEach((key) => {
      initial[key] = true;
    });
    return initial;
  });

  // 当选择改变时，通知父组件
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  const handleToggle = (vaccineKey: string) => {
    setSelected((prev) => ({
      ...prev,
      [vaccineKey]: !prev[vaccineKey],
    }));
  };

  const handleSelectAll = () => {
    const allSelected: SelectedVaccines = {};
    Object.keys(vaccineConfigs).forEach((key) => {
      allSelected[key] = true;
    });
    setSelected(allSelected);
  };

  const handleDeselectAll = () => {
    const allDeselected: SelectedVaccines = {};
    Object.keys(vaccineConfigs).forEach((key) => {
      allDeselected[key] = false;
    });
    setSelected(allDeselected);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">选择需要的疫苗</h3>
        <div className="space-x-2">
          <button
            type="button"
            onClick={handleSelectAll}
            className="text-xs text-indigo-600 hover:text-indigo-500"
          >
            全选
          </button>
          <button
            type="button"
            onClick={handleDeselectAll}
            className="text-xs text-gray-500 hover:text-gray-400"
          >
            取消全选
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md shadow p-4 max-h-60 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(vaccineConfigs).map(([key, vaccine]) => (
          <div key={key} className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={key}
                name={key}
                type="checkbox"
                checked={!!selected[key]}
                onChange={() => handleToggle(key)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={key} className="font-medium text-gray-900">
                {vaccine.name}
              </label>
              <p className="text-xs text-gray-500">
                {vaccine.schedule.length}次接种
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
