import { NextRequest, NextResponse } from "next/server";
import { vaccineConfigs } from "@/lib/vaccines";
import { addDaysToDate } from "@/lib/utils";
import { createEvents, EventAttributes } from "ics";

export async function GET(request: NextRequest) {
  // 获取查询参数
  const searchParams = request.nextUrl.searchParams;
  const birthDate = searchParams.get("birthDate");
  const vaccinesParam = searchParams.get("vaccines");

  // 参数验证
  if (!birthDate || !vaccinesParam) {
    return NextResponse.json({ error: "缺少必要参数" }, { status: 400 });
  }

  // 解析参数
  const selectedVaccines = vaccinesParam.split(",");
  const birthDateObj = new Date(birthDate);

  // 生成事件列表
  const events: EventAttributes[] = [];

  // 处理每个选中的疫苗
  selectedVaccines.forEach((vaccineKey) => {
    const vaccine = vaccineConfigs[vaccineKey];
    if (!vaccine) return;

    // 为每剂疫苗创建日历事件
    vaccine.schedule.forEach((dose) => {
      const doseDate = addDaysToDate(birthDateObj, dose.days);

      // 格式化为ICS所需的日期格式 [year, month, day, hour, minute]
      const year = doseDate.getFullYear();
      const month = doseDate.getMonth() + 1; // getMonth() 返回 0-11
      const day = doseDate.getDate();

      events.push({
        title: `${vaccine.name} - ${dose.description}`,
        description: `宝宝接种${vaccine.name}${dose.description}`,
        start: [year, month, day, 9, 0], // 设置时间为上午9点
        duration: { hours: 1 }, // 设置持续时间为1小时
        busyStatus: "BUSY",
        categories: ["疫苗接种"],
        status: "CONFIRMED",
        alarms: [
          {
            action: "display",
            description: "疫苗接种提醒",
            trigger: { days: 1, before: true },
          },
          {
            action: "display",
            description: "疫苗接种提醒",
            trigger: { hours: 1, before: true },
          },
        ],
      });
    });
  });

  // 生成ICS文件内容
  return new Promise<Response>((resolve) => {
    createEvents(events, (error, value) => {
      if (error) {
        console.error("生成ICS文件失败:", error);
        resolve(
          NextResponse.json({ error: "生成ICS文件失败" }, { status: 500 })
        );
        return;
      }

      // 使用标准的Response而不是NextResponse来处理UTF-8内容
      resolve(
        new Response(value, {
          headers: {
            "Content-Type": "text/calendar;charset=utf-8",
            "Content-Disposition": `attachment; filename="baby_vaccine_calendar.ics"`,
            "Cache-Control": "no-store",
          },
        })
      );
    });
  });
}
