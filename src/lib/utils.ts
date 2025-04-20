/**
 * 格式化日期为YYYY-MM-DD格式
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * 将YYYY-MM-DD格式的字符串转换为Date对象
 */
export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * 根据出生日期添加天数
 */
export function addDaysToDate(birthDate: Date, days: number): Date {
  const newDate = new Date(birthDate);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
