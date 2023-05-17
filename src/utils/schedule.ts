import { ISchedule, IScheduleOld } from "../pages/Calendar/api";

export const redirectToCurrentSchedule = (
    scheduleData: [ISchedule, IScheduleOld],
    handleLoadData: { (): Promise<void>; (): void }
) => {
    if (scheduleData) {
        const currentDay = new Date().getDate();

        if (scheduleData[0].content.includes(`${currentDay}`)) {
            window
                .open(`${scheduleData[0].schedule}#page=4&zoom=100`, "_blank")!
                .focus();

            return;
        }

        window
            .open(`${scheduleData[1].schedule_old}#page=4&zoom=100`, "_blank")!
            .focus();
    }

    handleLoadData();
};
