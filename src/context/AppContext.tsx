import { createContext, useEffect, useState } from 'react';
import Tests from '../lib/Tests';
import getRandomInt from '../lib/getRandomInt';
import shuffleArray from '../lib/shuffleArray';

const INITIAL_POINTS_REMAINING: number = 100;
const INITIAL_POINTS_EARNED: number = 0;
const INITIAL_TIME_REMAINING: number = 10;
const POINTS_TO_DETUCT = 40;

interface AppContextType {
    pointsRemaining: number;
    pointsEarned: number;
    timeRemaining: number;
    roundIsEnded: boolean;
    roundNumber: number;
    currentTest: {
        id: number;
        question: string;
        options: {
            id: number;
            text: string;
        }[];
        answer: string;
    };
    // updatePointsEarned: (amount: number) => void;
    // resetRemaining: () => void;
    deductPointsRemaining: () => void;
    // newRoundHandler: () => void;
    roundEnder: (amount: number) => void;
    testUpdater: () => void;
}

const initialAppContext: AppContextType = {
    pointsRemaining: INITIAL_POINTS_REMAINING,
    pointsEarned: INITIAL_POINTS_EARNED,
    timeRemaining: INITIAL_TIME_REMAINING,
    roundIsEnded: true,
    roundNumber: 0,
    currentTest: {
        id: -1,
        question: '',
        options: [],
        answer: '',
    },
    // updatePointsEarned: () => {},
    // resetRemaining: () => {},
    deductPointsRemaining: () => {},
    // newRoundHandler: () => {},
    roundEnder: () => {},
    testUpdater: () => {},
};

const AppContext = createContext<AppContextType>(initialAppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [pointsEarned, setPointsEarned] = useState<number>(
        INITIAL_POINTS_EARNED
    );
    const [pointsRemaining, setPointsRemaining] = useState<number>(
        INITIAL_POINTS_REMAINING
    );
    const [timeRemaining, setTimeRemaining] = useState<number>(
        INITIAL_TIME_REMAINING
    );
    const [roundIsEnded, setRoundIsEnded] = useState<boolean>(false);
    const [roundNumber, setRoundNumber] = useState<number>(0);
    const [currentTest, setCurrentTest] = useState<AppContextType['currentTest']>({
        id: -1,
        question: '',
        options: [],
        answer: '',
    });

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            decreaseTimeRemaining();
            // decreasePointsRemaining();
        }, 1000);

        const decreaseTimeRemaining = () => {
            setTimeRemaining((previous: number) => {
                const next = previous - 1;
                if (next === 0) {
                    setRoundIsEnded(true);
                    clearInterval(timer);
                }
                return next;
            });
        };

        // const decreasePointsRemaining = () => {
        //     setPointsRemaining((previous: number) => {
        //         const next = previous - INITIAL_POINTS_REMAINING / INITIAL_TIME_REMAINING;
        //         if (next === 0) {
        //             setRoundIsEnded(true);
        //             clearInterval(timer);
        //         }
        //         return next;
        //     });
        // };

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [roundNumber]);

    // const newRoundHandler = () => {
    // setRoundIsEnded(false);
    // setRoundNumber((previous) => previous + 1);
    // };

    const testUpdater = () => {
        let test = Tests[getRandomInt(Tests.length)];
        let clone = JSON.parse(JSON.stringify(test));
        let shuffledArray = shuffleArray(clone.options);
        clone.options = shuffledArray;
        setCurrentTest(clone);
    };

    const roundEnder = (points: number) => {
        setRoundIsEnded(true);
        setPointsEarned((prevPoints) => prevPoints + points);
        setPointsRemaining(INITIAL_POINTS_REMAINING);
        setTimeRemaining(INITIAL_TIME_REMAINING);
        setRoundNumber((previous) => previous + 1);
        testUpdater();
        // setRoundIsEnded(false);
    };

    // const updatePointsEarned = (amount: number) => {
    // setPointsEarned((prevPoints) => prevPoints + amount);
    // };

    // const resetRemaining = () => {
    // setPointsRemaining(INITIAL_POINTS_REMAINING);
    // setTimeRemaining(INITIAL_TIME_REMAINING);
    // };

    const deductPointsRemaining = () => {
        setPointsRemaining((prevPoints) => {
            if (prevPoints - POINTS_TO_DETUCT < 0) {
                return 0;
            }
            return prevPoints - POINTS_TO_DETUCT;
        });
    };

    const value: AppContextType = {
        pointsEarned,
        pointsRemaining,
        timeRemaining,
        roundIsEnded,
        roundNumber,
        currentTest,
        // updatePointsEarned,
        // resetRemaining,
        deductPointsRemaining,
        // newRoundHandler,
        roundEnder,
        testUpdater,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
