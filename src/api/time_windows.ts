import express from 'express';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
    const timeNow: Date = new Date();
    const startOfCurrentHour: Date = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate(), timeNow.getHours(), 0, 0);
    const startOfCurrentMinute: Date = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate(), timeNow.getHours(), timeNow.getMinutes(), 0);
    const oneHourAgo: Date = new Date(timeNow.getTime() - 60 * 60 * 1000);
    const oneMinuteAgo: Date = new Date(timeNow.getTime() - 60 * 1000);
 
    res.json({
        now: timeNow,
        AbsoluteHourWindowStart: startOfCurrentHour,
        AbsoluteMinuteWindowStart: startOfCurrentMinute,
        MovingHourWindowStart: oneHourAgo,
        MowingMinuteWindowStart: oneMinuteAgo,
    })
});

export default router;
