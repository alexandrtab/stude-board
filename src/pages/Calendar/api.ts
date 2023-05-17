import axios from "axios";

export interface ISchedule {

    schedule: string;

    content: string;

}
export interface IScheduleOld {
    schedule_old: string;
    content: string;
}

export const getCurrentSchedule = async () => {
    const response = await axios.get(
        process.env.REACT_APP_SCHEDULE_URL as string
    );

    return response.data.data as [ISchedule, IScheduleOld];
};
