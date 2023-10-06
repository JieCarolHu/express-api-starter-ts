import express from 'express';

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, any>('/', (req, res) => {
    const dict: Map<number, string> = new Map<number, string>();
    dict.set(1, "one");
    dict.set(2, "two");
    dict.set(3, "three");
    
    res.send({
        3: dict.has(3),
        5: dict.has(5),
    })
    
    console.log("Does 3 exist? " + dict.has(3));
    console.log("Does 5 exist? " + dict.has(5));
});

export default router;
