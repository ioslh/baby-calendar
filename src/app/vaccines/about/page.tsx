'use client';

import { useState } from 'react';
import { vaccineConfigs } from '@/lib/vaccines';
import Link from 'next/link';
import { VaccineType } from '@/lib/types';
import DoubleCheck from '@/components/double-check';

export default function VaccineConfigPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');


  // 根据类型和搜索词过滤疫苗
  const filteredVaccines = Object.entries(vaccineConfigs).filter(([key, vaccine]) => {
    const matchesType = 
      selectedType === 'all' || 
      (selectedType === 'national' && vaccine.type === VaccineType.FREE) ||
      (selectedType === 'selfPaid' && vaccine.type === VaccineType.SELF_PAID);
    
    const matchesSearch = 
      vaccine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/vaccines" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回主页
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            宝宝疫苗接种配置
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            以下是系统中配置的所有疫苗及其接种时间表
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <div>
                  <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-1">
                    疫苗类型
                  </label>
                  <select
                    id="filter"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="all">全部疫苗</option>
                    <option value="national">国家免疫规划疫苗（免费）</option>
                    <option value="selfPaid">自费疫苗</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    搜索疫苗
                  </label>
                  <input
                    type="text"
                    id="search"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    placeholder="输入疫苗名称搜索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-md w-full sm:w-auto">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">共计 {filteredVaccines.length} 种疫苗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredVaccines.map(([key, vaccine]) => {
            return (
              <div 
                key={key} 
                className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
              >
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {vaccine.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {vaccine.type === VaccineType.FREE ? '国家免疫规划疫苗（免费）' : '第二类疫苗（自费）'}
                    </p>
                  </div>
                  <span 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      vaccine.type === VaccineType.FREE 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {vaccine.type === VaccineType.FREE ? '免费' : '自费'}
                  </span>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">疫苗介绍</h4>
                    <p className="text-sm text-gray-700">{vaccine.description}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">接种时间表</h4>
                    <ul className="space-y-3">
                      {vaccine.schedule.map((dose, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 text-xs font-medium">
                              {index + 1}
                            </span>
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            <span className="font-medium">{dose.description}</span>
                            <span className="ml-2 text-gray-500">
                              ({Math.floor(dose.days / 30)} 个月 + {dose.days % 30} 天)
                            </span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-4 py-4 sm:px-6 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-900">
                      共 {vaccine.schedule.length} 剂
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">接种间隔: </span>
                      {vaccine.schedule.length > 1 ? (
                        vaccine.schedule
                          .slice(1)
                          .map((dose, i) => {
                            const daysBetween = dose.days - vaccine.schedule[i].days;
                            const months = Math.floor(daysBetween / 30);
                            const days = daysBetween % 30;
                            return months > 0 
                              ? `${months}个月${days > 0 ? `+${days}天` : ''}` 
                              : `${days}天`;
                          })
                          .join(' / ')
                      ) : '单剂次'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVaccines.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">没有找到符合条件的疫苗</h3>
            <p className="mt-1 text-sm text-gray-500">尝试调整筛选条件或清空搜索内容</p>
          </div>
        )}

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-500 text-center">
            <p>疫苗接种时间表基于中国国家免疫规划最新版本 (2021-2024)</p>
            <p className="mt-2">注意：具体接种时间可能因地区政策略有不同，实际接种请遵医嘱</p>
          </div>
        </div>

        <DoubleCheck />
      </div>
    </div>
  );
}