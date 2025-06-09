import React from "react";
import { Calendar, Popover } from "antd";
import type { Dayjs } from "dayjs";

const CustomCalendar: React.FC = () => {
  const getPopoverContent = (date: Dayjs) => {
    // Tuỳ chỉnh nội dung hiển thị
    return (
      <div>
        <p>Ngày: {date.format("DD/MM/YYYY")}</p>
        <p>Sự kiện: Không có</p>
      </div>
    );
  };

  const dateCellRender = (value: Dayjs) => {
    return (
      <Popover
        content={getPopoverContent(value)}
        trigger="hover"
        placement="top"
      >
        <div style={{ textAlign: "center" }}>{value.date()} <span>.</span></div>
      </Popover>
    );
  };

  return <Calendar dateFullCellRender={dateCellRender} />;
};

export default CustomCalendar;
