import React, { useEffect, useState } from "react";

import { getCurrentSchedule, ISchedule, IScheduleOld } from "./api";
import { redirectToCurrentSchedule } from "../../utils/schedule";
import { Button } from "../../components/button/Button";

export const Calendar = () => {
    const [scheduleData, setScheduleData] = useState<[ISchedule, IScheduleOld]>();
    const handleLoadData = async () => {
        const data = await getCurrentSchedule();

        setScheduleData(data);
    };

    useEffect(() => {
        handleLoadData();
    }, []);

    const handlePressCurrentSchedule = () => {
        if (scheduleData) {
            redirectToCurrentSchedule(scheduleData, handleLoadData);
        }
    };

    return (
        <div>
            <Button type ="button" text="Расписание" onButtonClick={ handlePressCurrentSchedule }/>
        </div>
    );
};
