export default function DoubleCheck() {
  return (
    <div className="mt-8 p-4 bg-yellow-50 rounded-md border border-yellow-200">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">免责声明</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              本应用展示的疫苗信息仅供参考，不构成医疗建议。疫苗政策可能因地区和时间而异，且随时可能更新。
            </p>
            <p className="mt-1">
              <strong>重要提示：</strong>
              下载日历或查看疫苗信息后，请务必与当地医疗机构或疾控部门核对最新的疫苗接种计划，以确保您获取最准确的信息。
            </p>
            <p className="mt-1">
              随着医学进展和国家政策调整，疫苗接种方案可能发生变化。请定期咨询专业医疗人员，以获取针对您孩子的个性化建议。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
