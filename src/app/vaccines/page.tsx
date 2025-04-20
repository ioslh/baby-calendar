'use client';

import { useState } from 'react';
import { SelectedVaccines } from '@/lib/types';
import DateInput from '@/components/date-input';
import VaccineSelector from '@/components/vaccine-selector';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Info } from 'lucide-react';
import DoubleCheck from '@/components/double-check';


export default function Home() {
  const [birthDate, setBirthDate] = useState<string>(formatDate(new Date()));
  const [selectedVaccines, setSelectedVaccines] = useState<SelectedVaccines>({});
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleDateChange = (date: string) => {
    setBirthDate(date);
  };

  const handleVaccineChange = (selected: SelectedVaccines) => {
    setSelectedVaccines(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;

    setIsGenerating(true);

    try {
      // 创建查询字符串
      const selectedVaccineKeys = Object.keys(selectedVaccines).filter(key => selectedVaccines[key]);
      const queryParams = new URLSearchParams();
      queryParams.append('birthDate', birthDate);
      queryParams.append('vaccines', selectedVaccineKeys.join(','));
      
      // 直接下载ICS文件
      const response = await fetch(`/vaccines/ics?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error('生成ICS文件失败');
      }
      
      // 获取文件内容
      const blob = await response.blob();
      
      // 创建下载链接
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = '宝宝疫苗接种日历.ics';
      
      // 添加到DOM并触发下载
      document.body.appendChild(a);
      a.click();
      
      // 清理
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setShowSuccess(true);
      
      // 3秒后隐藏成功消息
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('下载失败', error);
      alert('生成日历文件失败，请重试');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* 顶部图标区域 */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8 sm:px-10">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white sm:text-2xl">宝宝疫苗接种日历</h1>
              <Link href="/vaccines/about" className="text-white hover:text-indigo-200">
                <Info className="h-8 w-8 text-white opacity-80" />
              </Link>
            </div>
            <p className="mt-2 text-blue-100">根据宝宝出生日期生成疫苗接种日历，导入到手机日历中随时查看</p>
          </div>
          
          {/* 表单区域 */}
          <div className="px-6 py-8 sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <DateInput onChange={handleDateChange} value={birthDate} />
              
              <VaccineSelector onChange={handleVaccineChange} />
              
              {/* 操作按钮 */}
              <div className="flex flex-col gap-4 items-center justify-center pt-4">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      正在生成...
                    </>
                  ) : '生成日历文件'}
                </button>
                <Link
                  href="/vaccines/about"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
                >
                  查看疫苗信息
                </Link>
              </div>
              
              {/* 成功提示 */}
              {showSuccess && (
                <div className="mt-3 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">日历文件生成成功！正在下载...</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* 底部说明 */}
          <div className="bg-gray-50 px-6 py-4 sm:px-10">
            <h3 className="text-sm font-medium text-gray-500">使用说明</h3>
            <div className="mt-2 text-xs text-gray-500">
              <p>1. 选择宝宝的出生日期</p>
              <p>2. 勾选需要的疫苗类型</p>
              <p>3. 点击&quot;生成日历文件&quot;按钮下载ICS文件</p>
              <p>4. 将下载的ICS文件导入到您的日历应用中</p>
              <p className="mt-2 text-xs text-gray-400">* 日历事件包含提醒功能，会在接种前1天和1小时提醒您</p>
            </div>
            <DoubleCheck />
          </div>
        </div>
      </div>
    </main>
  );
}
