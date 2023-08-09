import { createContext, useEffect, useRef, useState } from 'react';

import Tests from '../db/Tests';
import getRandomInt from '../lib/getRandomInt';
import shuffleArray from '../lib/shuffleArray';

const POINTS_PER_QUESTION: number = 100;
const INITIAL_TIME_REMAINING: number = 50;
// const STREAK_FACTOR: number = 2;

interface AppContextType {
    gameNumber: number;
    timeOut: boolean;
    streak: number;
    // pointsEarned: number;
    pointsTotal: number;
    timeRemaining: number;
    // roundIsEnded: boolean;
    roundNumber: number;
    que: boolean;
    noAmmo: boolean;
    currentTest: {
        id: number;
        question: string;
        options: {
            id: number;
            text: string;
        }[];
        answer: string;
    };
    roundEnder: (correct: boolean) => void;
    // testUpdater: () => void;
    queSetter: () => void;
    calculatePointsTotal: (correct: boolean) => void;
    calculateStreak: (correct: boolean) => void;
    testsHandler: () => void;
    startTimer: () => void;
    signalNewGame: () => void;
}

const initialAppContext: AppContextType = {
    gameNumber: 0,
    timeOut: false,
    streak: 0,
    pointsTotal: 0,
    timeRemaining: INITIAL_TIME_REMAINING,
    que: false,
    noAmmo: false,
    // pointsEarned: 0,
    // roundIsEnded: true,
    roundNumber: 0,
    currentTest: {
        id: -1,
        question: '',
        options: [],
        answer: '',
    },
    roundEnder: () => {},
    // testUpdater: () => {},
    queSetter: () => {},
    calculatePointsTotal: () => {},
    calculateStreak: () => {},
    testsHandler: () => {},
    startTimer: () => {},
    signalNewGame: () => {},
};

const AppContext = createContext<AppContextType>(initialAppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [que, setQue] = useState<boolean>(false);
    // const [pointsEarned, setPointsEarned] = useState<number>(0);
    // const [pointsTotal, setPointsTotal] = useState<number>(0);
    const pointsTotal = useRef<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(
        INITIAL_TIME_REMAINING
    );
    const streak = useRef<number>(0);
    // const [roundIsEnded, setRoundIsEnded] = useState<boolean>(false);
    const [roundNumber, setRoundNumber] = useState<number>(1);
    const gameNumber = useRef<number>(0);
    const [currentTest, setCurrentTest] = useState<
        AppContextType['currentTest']
    >({
        id: -1,
        question: '',
        options: [],
        answer: '',
    });

    const signalNewGame = () => {
        gameNumber.current++;
    };

    // const currentTest = useRef<AppContextType['currentTest']>({
    //     id: -1,
    //     question: '',
    //     options: [],
    //     answer: '',
    // })

    const [timerStarted, setTimerStarted] = useState<boolean | null>(null);

    const startTimer = () => {
        setTimerStarted(true);
    };

    const [timeOut, setTimeOut] = useState<boolean>(false);
    

    const [tests, setTests] = useState<object[]>(Tests);

    const [emptyTests, setEmptyTests] = useState<boolean>(false);

    const [noAmmo, setNoAmmo] = useState<boolean>(false);

    const testsHandler = () => {
        try {
            if (emptyTests) {
                setNoAmmo(true);
            }
            let test = tests[getRandomInt(tests.length)];
            let newTests = tests.filter((t: object) => t !== test);
            setTests(newTests);
            console.log(newTests.length);
            let clone = JSON.parse(JSON.stringify(test));
            let shuffledArray = shuffleArray(clone.options);
            clone.options = shuffledArray;
            console.log('chosen: ', clone.answer);
            setCurrentTest(clone);
            if (newTests.length === 0) {
                setEmptyTests(true);
            }
        } catch (error) {
            console.log('Error retrieving or storing items:', error);
        }
    };

    const resetProvider = () => {
        setTests(Tests);
        setNoAmmo(false);
        setTimerStarted(false);
        setEmptyTests(false);
        streak.current = 0;
        pointsTotal.current = 0;
        setTimeRemaining(INITIAL_TIME_REMAINING);
        setRoundNumber(1);
        setTimeOut(false);
        setQue(false);
        // setCurrentTest({
        //     id: -1,
        //     question: '',
        //     options: [],
        //     answer: '',
        // });
    };

    useEffect(() => {
        resetProvider();
    }, [gameNumber]);

    useEffect(() => {
        if (!timerStarted) return;
        const timer: NodeJS.Timeout = setInterval(() => {
            decreaseTimeRemaining();
        }, 1000);

        const decreaseTimeRemaining = () => {
            setTimeRemaining((previous: number) => {
                const next = previous - 1;
                if (next === 0) {
                    setTimeOut(true);
                    clearInterval(timer);
                }
                return next;
            });
        };

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [timerStarted, gameNumber]);

    const queSetter = () => {
        setQue(true);
    };

    const roundEnder = (isCorrect: boolean) => {
        if (!timeOut) {
            setQue(false);
            // setRoundIsEnded(true);
            calculateStreak(isCorrect);
            calculatePointsTotal(isCorrect);
            setRoundNumber((previous) => previous + 1);
        }
    };

    const calculateStreak = (isCorrect: boolean) => {
        if (isCorrect) {
            streak.current += 1;
        } else {
            streak.current = 0;
        }
    };

    const calculatePointsTotal = (isCorrect: boolean) => {
        if (isCorrect) {
            pointsTotal.current += streak.current * POINTS_PER_QUESTION;
        }
    };

    const value: AppContextType = {
        gameNumber: gameNumber.current,
        streak: streak.current,
        // pointsEarned,
        pointsTotal: pointsTotal.current,
        timeRemaining,
        // roundIsEnded,
        roundNumber,
        que,
        currentTest,
        timeOut,
        noAmmo,
        roundEnder,
        queSetter,
        calculatePointsTotal,
        calculateStreak,
        testsHandler,
        startTimer,
        signalNewGame,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

// const testsHandler = async () => {
//     try {
//         let jsonValue = await AsyncStorage.getItem('tests');
//         if (!jsonValue) {
//             jsonValue = JSON.stringify(Tests);
//             await AsyncStorage.setItem('tests', jsonValue);
//         }
//         const tests = JSON.parse(jsonValue || '[]');
//         let test = tests[getRandomInt(tests.length)];
//         const newTests = tests.filter((t: object) => t !== test);
//         const newTestJSON = JSON.stringify(newTests);
//         await AsyncStorage.setItem('tests', newTestJSON);
//         return test;
//     } catch (error) {
//         console.log('Error retrieving or storing items:', error);
//     }
// };

// const testUpdater = () => {
//     let test = testsHandler();
//     let clone = JSON.parse(JSON.stringify(test));
//     let shuffledArray = shuffleArray(clone.options);
//     clone.options = shuffledArray;
//     console.log("chosen: ", clone);
//     setCurrentTest(clone);
// };
